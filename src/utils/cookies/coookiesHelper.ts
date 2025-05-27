import { cookies } from 'next/headers';

export async function saveAccessToken(token: string) {
	const cookieStore = await cookies();
	cookieStore.set('accessToken', token, {
		httpOnly: true,
		path: '/',
		domain: 'vercel.app',
		maxAge: 60 * 60 * 24 * 7,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'lax',
	});
}

export async function getAccessToken(): Promise<string | undefined> {
	const cookieStore = await cookies();
	return cookieStore.get('accessToken')?.value;
}

export async function removeAccessToken() {
	const cookieStore = await cookies();
	cookieStore.delete('accessToken');
}
