import baseApi from '@/api/api';
import { News } from '../types';

const newsApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getNews: build.query<News, void>({
			query: () => ({ url: 'news' }),
		}),
	}),
});

export const { useGetNewsQuery } = newsApi;
