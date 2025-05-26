import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import fs from 'fs';
import path from 'path';

const PROTO_PATH = path.join(process.cwd(), 'proto/service.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as any;
const caCert = fs.readFileSync(path.resolve('grpc/certs/ca.crt'));
const clientCert = fs.readFileSync(path.resolve('grpc/certs/client.crt'));
const clientKey = fs.readFileSync(path.resolve('grpc/certs/client.key'));

const credentials = grpc.credentials.createSsl(caCert, clientKey, clientCert);

export const newsClient = new protoDescriptor.News(
	process.env.NEXT_PUBLIC_SERVER_HOST,
	credentials
);
