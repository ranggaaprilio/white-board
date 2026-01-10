import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);
const isAuthRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const { pathname } = req.nextUrl;

  console.log("[Middleware]", {
    userId,
    pathname,
    isPublic: isPublicRoute(req),
    isAuth: isAuthRoute(req),
  });

  // When signed in, redirect from auth pages to dashboard
  if (userId && isAuthRoute(req)) {
    console.log(
      "[Middleware] Redirecting authenticated user from auth page to dashboard"
    );
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // When signed out and hitting a protected route, redirect to sign-in
  if (!userId && !isPublicRoute(req)) {
    console.log("[Middleware] Redirecting unauthenticated user to sign-in");
    const signInUrl = new URL("/sign-in", req.url);
    signInUrl.searchParams.set("redirect_url", req.url);
    return NextResponse.redirect(signInUrl);
  }

  // When signed in and hitting the root path, redirect to dashboard
  if (userId && pathname === "/") {
    console.log("[Middleware] Redirecting authenticated user from root to dashboard");
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  console.log("[Middleware] Allowing request through");
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
