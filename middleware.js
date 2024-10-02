import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const { pathname } = request.nextUrl;

  const isLogin = false;

  if (isLogin && pathname === '/contact') {
    return NextResponse.redirect(new URL('/about', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher:
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
};
