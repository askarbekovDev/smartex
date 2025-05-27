import { credentials } from '@grpc/grpc-js';
import { AuthClient, NewsClient } from '@proto/service';
import fs from 'fs';
import path from 'path';

const HOST = process.env.NEXT_PUBLIC_SERVER_HOST!;

const caCert = fs.readFileSync(path.resolve('grpc/certs/ca.crt'));
const clientCert = fs.readFileSync(path.resolve('grpc/certs/client.crt'));
const clientKey = fs.readFileSync(path.resolve('grpc/certs/client.key'));

const sslCreds = credentials.createSsl(caCert, clientKey, clientCert);

export const newsClient = new NewsClient(HOST, sslCreds);
export const authClient = new AuthClient(HOST, sslCreds);
