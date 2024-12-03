'use client';

import { NewsCard } from '@/components/news-card';
import { NewsSkeletonGrid } from '@/components/news-skeleton';
import { useNews } from '../hooks/use-news';
import { Category } from '@/types/news';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

interface NewsGridProps {
	category: Category;
	country: string;
}

export function NewsGrid({ category, country }: NewsGridProps) {
	const { data, isLoading, isError, error } = useNews(category, country);

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

	return (
		<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
			{data?.results.map((article) => (
				<NewsCard key={article.article_id} article={article} />
			))}
		</div>
	);
}
