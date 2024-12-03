'use client';

import { NewsCard } from '@/components/news-card';
import { NewsSkeletonGrid } from '@/components/news-skeleton';

import { Category } from '@/types/news';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { fetchNews } from '@/lib/api';

interface NewsGridProps {
	category: Category;
	country: string;
}

export function NewsGrid({ category, country }: NewsGridProps) {
	const { ref, inView } = useInView();

	const { data, isLoading, isError, error, fetchNextPage, hasNextPage } = useInfiniteQuery({
		queryKey: ['news', category, country],
		queryFn: ({ pageParam = 1 }) => fetchNews(category, country, pageParam),
		getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
		initialPageParam: 1,
	});

	useEffect(() => {
		if (inView && hasNextPage) {
			console.log('fetching next page');
			fetchNextPage();
		}
	}, [inView, fetchNextPage, hasNextPage]);

	if (isLoading) {
		return <NewsSkeletonGrid />;
	}

	if (isError) {
		return (
			<Alert variant='destructive'>
				<AlertCircle className='h-4 w-4' />
				<AlertTitle>Error</AlertTitle>
				<AlertDescription>{error instanceof Error ? error.message : 'Failed to load news'}</AlertDescription>
			</Alert>
		);
	}

	console.log(data);

	return (
		<>
			<div ref={ref} className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{data?.pages?.map((page) => page.results?.map((article) => <NewsCard key={article.article_id} article={article} />))}
			</div>
			<Button onClick={() => fetchNextPage()} disabled={!hasNextPage} className='my-4'>
				Next page
			</Button>
		</>
	);
}
