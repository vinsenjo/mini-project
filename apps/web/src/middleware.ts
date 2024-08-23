import { NextRequest, NextResponse } from 'next/server';
import { getCookie } from './libs/actions/server';

const protectPages = ['/sasa'];

export async function middleware(request: NextRequest) {
  const token = await getCookie('token');
  const url = request.nextUrl.pathname;
  if (protectPages.includes(url)) {
    if (!token) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  return NextResponse.next();
}
