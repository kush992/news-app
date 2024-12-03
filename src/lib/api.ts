import { NewsArticle, NewsResponse } from '@/types/news';

export async function getNewsById(id: string): Promise<NewsArticle | null> {
	const NEWSDATA_API_KEY = process.env.NEWSDATA_API_KEY;

	if (!NEWSDATA_API_KEY) {
		throw new Error('API key not configured');
	}

	try {
		const response = await fetch(`https://newsdata.io/api/1/news?apikey=${NEWSDATA_API_KEY}&id=${id}`);

		if (!response.ok) {
			throw new Error('Failed to fetch news article');
		}

		const data = await response.json();
		return data.results[0] || null;
	} catch (error) {
		console.error('Failed to fetch news article:', error);
		return null;
	}
}

export const fetchNews = async (category: string, country: string, page: number) => {
	try {
		const url = new URL(`${origin}/api/news`);
		url.searchParams.append('category', category);
		url.searchParams.append('country', country);
		url.searchParams.append('page', String(page));

		const response = await fetch(url.toString());

		if (!response.ok) {
			throw new Error(`Failed to fetch news: ${response.statusText}`);
		}

		const data = await response.json();

		return {
			results: data.results as NewsResponse['results'],
			nextPage: data.nextPage, // Ensure your API response includes this
		};
	} catch (error) {
		console.error('Error fetching news:', error);
		throw error;
	}
};
