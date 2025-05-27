import { NextResponse } from 'next/server';
import { Metadata, ServiceError } from '@grpc/grpc-js';
import { extractGrpcError, mapGrpcCodeToHttpStatus } from '@/utils/helper/grpcErrorHelpers';
import type { LoginRequest, LoginResponse } from '@proto/service'; // adjust path if needed
import { authClient } from 'grpc/client';
import { saveAccessToken } from '@/utils/cookies/coookiesHelper';

export async function POST(req: Request) {
	try {
		const { email, password, fireBaseToken } = (await req.json()) as LoginRequest;

		if (!fireBaseToken) {
			return NextResponse.json({ error: 'Отсутствует токен Firebase' }, { status: 400 });
		}

		const metadata = new Metadata();
		metadata.add('Accept-Language', 'ru');

		const response = await new Promise<LoginResponse>((resolve, reject) => {
			authClient.login(
				{ email, password, fireBaseToken },
				metadata,
				(err: ServiceError | null, res: LoginResponse) => {
					if (err) return reject(err);
					resolve(res);
				}
			);
		});

		await saveAccessToken(response.apiKey as string);

		return NextResponse.json(response);
	} catch (error: unknown) {
		const grpcError = extractGrpcError(error);
		console.error('Login gRPC Error:', grpcError.log);

		return NextResponse.json(
			{ error: 'Ошибка при входе в систему', details: grpcError.details },
			{ status: mapGrpcCodeToHttpStatus(grpcError.code) }
		);
	}
}
