import { NextResponse } from 'next/server';
import { Category } from '@/types/news';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const category = (searchParams.get('category') as Category) || 'top';
	const page = searchParams?.get('page');
	// const from = searchParams.get('from') || '';

	const NEWSDATA_API_KEY = process.env.NEWSDATA_API_KEY;

	if (!NEWSDATA_API_KEY) {
		return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
	}

	try {
		// const endpoint = page ? 'latest' : 'archive';
		const url = `https://newsdata.io/api/1/archive?apikey=${NEWSDATA_API_KEY}&category=${category}&language=en${page ? `&page=${page}` : ''}`;

		const response = await fetch(url);

		if (!response.ok) {
			console.error('Failed to fetch archive news:', response);
			throw new Error('Failed to fetch archive news');
		}

		const data = await response.json();
		return NextResponse.json(data);
	} catch (error) {
		console.error('Error fetching archive news:', error);
		return NextResponse.json({ error: 'Failed to fetch archive news' }, { status: 500 });
	}
}
