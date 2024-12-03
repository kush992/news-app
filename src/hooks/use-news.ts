import { Category, NewsResponse } from '@/types/news';
import { useQuery } from '@tanstack/react-query';

async function fetchNews(category: Category, country: string): Promise<NewsResponse> {
	const params = new URLSearchParams({ category, country });
	const response = await fetch(`/api/news?${params}`);
	if (!response.ok) {
		throw new Error('Failed to fetch news');
	}
	return response.json();
}

export function useNews(category: Category, country: string) {
	return useQuery({
		queryKey: ['news', category, country],
		queryFn: () => fetchNews(category, country),
		staleTime: 5 * 60 * 1000, // 5 minutes
		// cacheTime: 10 * 60 * 1000, // 10 minutes
	});
}
