import type { NextRequest } from 'next/server';
import { parseJwt } from './lib/jwt';
import * as jose from 'jose';
import { SessionObj } from './app/_lib/definitions';

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('token')?.value;

  // TODO if admin redirect to dashboard
  // TODO if researcher redirect to /researches

  if (!currentUser) {
    return Response.redirect(new URL('/login', request.url));
  }

  const decodedJwt = jose.decodeJwt(String(currentUser));
  const sessionObj: SessionObj = {
    account_id: (decodedJwt as any).id.account_id,
    role: (decodedJwt as any).id.role,
  };

  // if (currentUser && request.nextUrl.pathname.startsWith('/login')) {
  //   return Response.redirect(new URL('/dashboard', request.url));
  // }

  // if (sessionObj.role === 'admin') {
  //   return Response.redirect(new URL('/admin/dashboard', request.url));
  // }

  if (request.url.includes('/admin') && sessionObj.role !== 'admin') {
    return Response.redirect(new URL('/repository', request.url));
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.png$|login|signup|reset-password).*)',
  ],
};
