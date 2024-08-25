import { NextRequest, NextResponse } from 'next/server';
import { getCookie, getData } from './libs/actions/server';

const eoPages = ['/dashboard'];
const userPages = ['/profile'];
const protectPages = ['/dashboard','/profile'];

export async function middleware(request: NextRequest) {
  const token = await getCookie('token');
  const url = request.nextUrl.pathname;

  if (protectPages.includes(url)) {
    if (!token) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  if (eoPages.includes(url)) {
    const data = await getData(token?.value!);
    console.log(data.user.role);
    if (data.user.role !== 'eo') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  if (userPages.includes(url)) {
    const data = await getData(token?.value!);
    console.log(data.user.role);
    if (data.user.role !== 'user') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}
