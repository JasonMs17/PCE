import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isAuthenticated } from './lib/jwtTokenControl';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('OurSiteJWT')?.value;

  const protectedPaths = ['/admin'];
  const pathname = req.nextUrl.pathname;

  if (protectedPaths.some((path) => pathname.startsWith(path)) && !pathname.includes('/admin/auth')) {
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = '/';
      return NextResponse.redirect(url);
    }

    try {
      const authorized = await isAuthenticated(token);

      if (!authorized) {
        const url = req.nextUrl.clone();
        url.pathname = '/admin/auth';
        return NextResponse.redirect(url);
      }
    } catch (error instanceof Error) {
      console.error('JWT verification error:', error);
      const url = req.nextUrl.clone();
      url.pathname = '/admin/auth';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};