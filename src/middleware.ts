import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_ROUTES = ['/login', '/register', '/forgot-password'];

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const token = request.cookies.get('accessToken')?.value;

	const isPublic = PUBLIC_ROUTES.some((prefix) => pathname.startsWith(prefix));

	if (isPublic && token) {
		return NextResponse.redirect(new URL('/', request.url));
	}

	return NextResponse.next();
}
