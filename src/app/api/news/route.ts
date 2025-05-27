import { callUnary } from '@/lib/grpc/callUnary';
import { extractGrpcError, mapGrpcCodeToHttpStatus } from '@/utils/helper/grpcErrorHelpers';
import { NextResponse } from 'next/server';
import type { GetNewsRequest, GetNewsResponse } from '@proto/service';
import { newsClient } from 'grpc/client';

export async function GET() {
	try {
		const request: GetNewsRequest = { offset: 0 };

		const response = await callUnary<GetNewsRequest, GetNewsResponse>(
			newsClient.get.bind(newsClient),
			request
		);

		return NextResponse.json(response);
	} catch (error) {
		const grpcErr = extractGrpcError(error);
		return NextResponse.json(
			{ error: 'Ошибка при получении новостей', details: grpcErr.details },
			{ status: mapGrpcCodeToHttpStatus(grpcErr.code) }
		);
	}
}
