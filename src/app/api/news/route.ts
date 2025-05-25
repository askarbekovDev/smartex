import { newsClient } from '../../../../grpc/client';

export async function GET(): Promise<Response> {
	console.log('Calling gRPC...');

	try {
		const response = await new Promise((resolve, reject) => {
			newsClient.Get({ offset: 0 }, (err: any, response: any) => {
				if (err) {
					console.error('gRPC error:', err);
					return reject(err);
				}
				resolve(response);
			});
		});

		return Response.json(response);
	} catch (error: any) {
		return Response.json({ error: error.message }, { status: 500 });
	}
}
