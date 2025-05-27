import { getAccessToken } from '@/utils/cookies/coookiesHelper';
import type { ServiceError, MetadataValue } from '@grpc/grpc-js';
import { Metadata } from '@grpc/grpc-js';
export async function callUnary<Req, Res>(
	method: (req: Req, md: Metadata, cb: (err: ServiceError | null, res: Res) => void) => void,
	request: Req,
	extraHeaders: Record<string, MetadataValue> = {}
): Promise<Res> {
	const md = new Metadata();

	const token = await getAccessToken();
	if (token) md.add('authorization', `Bearer ${token}`);

	md.add('Accept-Language', 'ru');

	for (const [k, v] of Object.entries(extraHeaders)) md.add(k, v);

	return new Promise<Res>((resolve, reject) => {
		method(request, md, (err, res) => {
			if (err || !res) return reject(err);
			resolve(res);
		});
	});
}
