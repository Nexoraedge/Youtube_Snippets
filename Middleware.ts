import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Get the session token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  
  // Handle admin routes
  if (path.startsWith("/admin")) {
    // The admin login page is public
    const isAdminLoginPage = path === "/admin/login";
    
    if (isAdminLoginPage && token?.role === "admin") {
      // Already logged in as admin, redirect to admin dashboard
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
    
    if (!isAdminLoginPage && (!token || token.role !== "admin")) {
      // Not logged in as admin, redirect to admin login
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    
    // Otherwise allow access to admin routes
    return NextResponse.next();
  }
  
  // Handle protected API routes
  if (path.startsWith("/api/admin") && (!token || token.role !== "admin")) {
    // Block non-admin access to admin API routes
    return new NextResponse(
      JSON.stringify({ success: false, message: "Unauthorized" }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
  
  // For all other routes, pass through
  return NextResponse.next();
}

// Only run middleware on these paths
export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};