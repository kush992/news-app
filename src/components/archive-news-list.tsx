'use client';

// import { useInfiniteQuery } from '@tanstack/react-query';
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';
// import { NewsCard } from './news-card';
// import { NewsSkeletonGrid } from './news-skeleton';
// import { Button } from './ui/button';
// import { LoadingSpinner } from './loading-spinner';
import { Category } from '@/types/news';
// import { AlertCircle } from 'lucide-react';
// import { Alert, AlertTitle, AlertDescription } from './ui/alert';

// async function getArchiveNews(category: Category, pageParam: string | null): Promise<NewsResponse> {
// 	const sixMonthsAgo = new Date();
// 	sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
// 	const fromDate = sixMonthsAgo.toISOString().split('T')[0];

// 	let url = `/api/archive-news?category=${category}&from=${fromDate}`;
// 	if (pageParam) {
// 		url += `&page=${pageParam}`;
// 	}

// 	const response = await fetch(url);
// 	if (!response.ok) {
// 		throw new Error('Failed to fetch archive news');
// 	}
// 	return response.json();
// }

interface ArchiveNewsListProps {
	category: Category;
}

export function ArchiveNewsList({}: ArchiveNewsListProps) {
	// const { ref, inView } = useInView();

	// const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
	// 	queryKey: ['archiveNews', category],
	// 	queryFn: ({ pageParam = null }) => getArchiveNews(category, pageParam),
	// 	getNextPageParam: (lastPage) => lastPage.nextPage || undefined,
	// 	staleTime: 5 * 60 * 1000, // 5 minutes
	// 	cacheTime: 10 * 60 * 1000, // 10 minutes
	// });

	// useEffect(() => {
	// 	if (inView && hasNextPage) {
	// 		fetchNextPage();
	// 	}
	// }, [inView, fetchNextPage, hasNextPage]);

	return (
		// <div className='space-y-4'>
		// 	{status === 'loading' ? (
		// 		<NewsSkeletonGrid />
		// 	) : status === 'error' ? (
		// 		<Alert variant='destructive'>
		// 			<AlertCircle className='h-4 w-4' />
		// 			<AlertTitle>Error</AlertTitle>
		// 			<AlertDescription>{error instanceof Error ? error.message : 'Failed to load news'}</AlertDescription>
		// 		</Alert>
		// 	) : (
		// 		<>
		// 			{data?.pages.map((page, i) => (
		// 				<div key={i} className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
		// 					{page.results.map((article) => (
		// 						<NewsCard key={article.article_id} article={article} />
		// 					))}
		// 				</div>
		// 			))}
		// 			<div ref={ref} className='flex justify-center'>
		// 				{isFetchingNextPage ? (
		// 					<LoadingSpinner />
		// 				) : hasNextPage ? (
		// 					<Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
		// 						Load More
		// 					</Button>
		// 				) : (
		// 					<p className='text-gray-500 dark:text-gray-400'>No more articles to load</p>
		// 				)}
		// 			</div>
		// 		</>
		// 	)}
		// 	{isFetching && !isFetchingNextPage && <LoadingSpinner />}
		// </div>
		<></>
	);
}
