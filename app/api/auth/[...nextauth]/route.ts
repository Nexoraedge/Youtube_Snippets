import NextAuth from "next-auth";
import GitHubProvider  from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import supabase from "@/lib/supabase";
import { User } from "@/types/database";
const handler = NextAuth({
  providers: [
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
    })
  ],
  session:{
      // i want it ot be unlimited     
      maxAge: 30 * 24 * 60 * 60,
      strategy: "jwt",
      updateAge: 24 * 60 * 60,
  },
  callbacks: {
    async signIn({ user, account }) {
      const email = user.email;
  
      if (!email) return false;
  
      // Check if user already exists in Supabase by email
      const { data: existingUser, error: fetchError } = await supabase
        .from("Users")
        .select("*")
        .eq("email", email)
        .single();
  
      if (!existingUser) {
        // User not in DB, insert new
        const { error: insertError } = await supabase
          .from("Users")
          .insert([{ email, username: user.name || email.split("@")[0] }]);
  
        if (insertError) {
          console.error("Failed to insert user:", insertError);
          return false;
        }
      }
  
      // All good
      return true;
    },
  },  
});

export { handler as GET, handler as POST };
