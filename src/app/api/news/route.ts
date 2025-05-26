import { Metadata } from '@grpc/grpc-js';
import { NextResponse } from 'next/server';
import { newsClient } from '../../../../grpc/client';

export async function GET() {
	return new Promise<NextResponse>((resolve, reject) => {
		const metadata = new Metadata();

		metadata.add('authorization', 'Bearer q92J5RrweFpnxkZdOdetn0%gHVYBr.b0CnhvQ45Nwb0ViFDeEV');
		metadata.add('Accept-Language', 'ru');

		newsClient.Get({ offset: 0 }, metadata, (err: any, response: any) => {
			if (err) {
				console.error('gRPC error:', err);
				reject(NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 }));
			} else {
				resolve(NextResponse.json(response));
			}
		});
	});
}
