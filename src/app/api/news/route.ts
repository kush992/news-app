import { NextRequest, NextResponse } from 'next/server';
import { Category } from '@/types/news';

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const category = (searchParams.get('category') as Category) || 'top';
	const country = searchParams.get('country') || 'us';
	const page = searchParams.get('page');

	const NEWSDATA_API_KEY = 'pub_61105200a75b2679c2344a0929c58c37c8389';

	if (!NEWSDATA_API_KEY) {
		return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
	}

	try {
		const url = new URL(`https://newsdata.io/api/1/news?apikey=${NEWSDATA_API_KEY}&language=en&category=${category}`);

		if (page && Number(page) > 2) {
			url.searchParams.set('page', page);
		}

		if (country) {
			url.searchParams.set('country', country);
		}

		const response = await fetch(url);

		console.log('url', url);
		// console.log(await response.json());

		if (!response.ok) {
			console.error('Failed to fetch news:', response.statusText);
			console.error('Error Object:', await response.json());
			throw new Error('Failed to fetch news');
		}

		const data = await response.json();
		return NextResponse.json(data);
	} catch (error) {
		console.error('Failed to fetch news:', error);
		return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
	}
}
