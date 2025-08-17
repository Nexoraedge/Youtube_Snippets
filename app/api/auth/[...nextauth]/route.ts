import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialsProvider from "next-auth/providers/credentials";
import supabaseServer from "@/lib/supabaseServer";

const handler = NextAuth({
  providers: [
    // Keep existing social providers for regular users
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
    }),
    
    // Add credentials provider for admin login
    CredentialsProvider({
      id: "admin-login",
      name: "Admin Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Check against your admin credentials
        // IMPORTANT: In production, store these securely, preferably in a database
        if (
          credentials?.username === process.env.ADMIN_USERNAME &&
          credentials?.password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: "admin",
            name: "Admin User",
            email: "admin@example.com",
            role: "admin"
          };
        }
        
        // You could also check against admin users in your Supabase database
        // Example:
        // const { data: adminUser } = await supabase
        //   .from("Admins")
        //   .select("*")
        //   .eq("username", credentials?.username)
        //   .single();
        // 
        // if (adminUser && credentials?.password === adminUser.password) {
        //   return {
        //     id: adminUser.id,
        //     name: adminUser.username,
        //     email: adminUser.email,
        //     role: "admin"
        //   }
        // }
        
        return null;
      }
    })
  ],
  
  pages: {
    // Regular users sign in here
    signIn: '/auth/signin',
    // Admin users will be redirected to this page when they need to sign in
    // We'll specify which sign-in to use based on the requested path
    // This is handled in middleware.ts
  },
  
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    strategy: "jwt",
    updateAge: 24 * 60 * 60,
  },
  
  callbacks: {
    async signIn({ user, account }) {
      // Skip Supabase operations for admin login
      if (account?.provider === "admin-login") {
        return true;
      }
      
      const email = user.email;
      if (!email) return false;

      // Check if user already exists in Supabase by email
      try {
        const { data: existingUser } = await supabaseServer
          .from("Users")
          .select("*")
          .eq("email", email)
          .single();

        if (!existingUser) {
          await supabaseServer
            .from("Users")
            .insert([{ email, username: user.name || email.split("@")[0] }]);
        }
        return true;
      } catch (err) {
        // Do not block login if DB op fails; log and continue
        console.error("NextAuth signIn DB error:", err);
        return true;
      }
    },
    
    async jwt({ token, user }) {
      
      if (user) {
        token.role = user.role || "user";
      }
      return token;
    },
    
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role as string;
      }
      return session;
    }
  },
});

export { handler as GET, handler as POST };