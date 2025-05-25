import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import fs from 'fs';
import path from 'path';

// Путь к .proto
const PROTO_PATH = path.join(__dirname, 'news.proto');

// Загрузка .proto
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as any;

// 🔐 Только client.crt и client.key, без ca.crt
const caCert = fs.readFileSync(path.resolve('grpc/certs/ca.crt'));
const clientCert = fs.readFileSync(path.resolve('grpc/certs/client.crt'));
const clientKey = fs.readFileSync(path.resolve('grpc/certs/client.key'));

const credentials = grpc.credentials.createSsl(caCert, clientKey, clientCert);

// Инициализация клиента
export const newsClient = new protoDescriptor.News('91.207.28.50:50051', credentials);
