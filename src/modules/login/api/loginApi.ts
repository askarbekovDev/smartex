import baseApi from '@/api/api';
import { LoginRequest, LoginResponse } from '@proto/service';

const loginApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		login: build.mutation<LoginResponse, LoginRequest>({
			query: (credentials) => ({
				url: 'auth/login',
				method: 'POST',
				body: credentials,
			}),
		}),
	}),
	overrideExisting: true,
});

export const { useLoginMutation } = loginApi;
