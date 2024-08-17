import { NextRequest, NextResponse } from 'next/server';
import { getCookie } from './libs/actions/server';

const protectPages = ['/'];

export function middleware(request: NextRequest) {
  const token = getCookie('token');
  const url = request.nextUrl.pathname;
  if (protectPages.includes(url)) {
    if (!token) {
      return NextResponse.redirect(new URL('/'));
    }
  }
  return NextResponse.next();
}
