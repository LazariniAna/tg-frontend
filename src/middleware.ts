import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
import { destroyCookie, setCookie } from 'nookies';
import { cookies } from 'next/headers';

export async function middleware(request: NextRequest, response: NextResponse, event: NextFetchEvent) {
  const cookieStore = cookies()
  const bearerAuth = cookieStore.get('Bearer');
  if (!bearerAuth) {
    return NextResponse.redirect(new URL('/login', request.url));
    const data = JSON.stringify({
      token: 'bearerAuth.value'
    })
    const fetchResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/auth/login/token`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    });
    const responseBody = await fetchResponse.json();
    if (responseBody && responseBody.access_token) {
      setCookie(null, 'auth-teacher', responseBody.access_token);
    }
  }

  NextResponse.next()

}
export const config = {
  matcher: ['/'],
}