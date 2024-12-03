'use client';

// import { useEffect } from 'react'
// import { useInView } from 'react-intersection-observer'
// import { useInfiniteQuery } from '@tanstack/react-query'
// import { NewsCard } from './news-card'
// import { NewsSkeletonGrid } from './news-skeleton'
// import { LoadingSpinner } from './loading-spinner'
// import { NewsResponse } from '@/types/news'

// async function getCryptoNews(pageParam: string | null): Promise<NewsResponse> {
//   const params = new URLSearchParams()
//   if (pageParam) params.append('page', pageParam)
//   const response = await fetch(`/api/crypto-news?${params}`)
//   if (!response.ok) {
//     throw new Error('Failed to fetch crypto news')
//   }
//   return response.json()
// }

export function CryptoNews() {
	//   const { ref, inView } = useInView()
	//   const { data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
	//     queryKey: ['crypto-news'],
	//     queryFn: ({ pageParam = null }) => getCryptoNews(pageParam),
	//     getNextPageParam: (lastPage) => lastPage.nextPage,
	//     staleTime: 5 * 60 * 1000,
	//     cacheTime: 10 * 60 * 1000,
	//   })

	//   useEffect(() => {
	//     if (inView && hasNextPage) {
	//       fetchNextPage()
	//     }
	//   }, [inView, fetchNextPage, hasNextPage])

	//   if (isLoading) return <NewsSkeletonGrid />
	//   if (isError) return <div>Error loading crypto news: {(error as Error).message}</div>

	return (
		<></>
		// <div className="space-y-4">
		//   {data.pages.map((page, i) => (
		//     <div key={i} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
		//       {page.results.map((article) => (
		//         <NewsCard key={article.article_id} article={article} />
		//       ))}
		//     </div>
		//   ))}
		//   <div ref={ref} className="flex justify-center">
		//     {isFetchingNextPage ? (
		//       <LoadingSpinner />
		//     ) : hasNextPage ? (
		//       <LoadingSpinner />
		//     ) : (
		//       <p className="text-gray-500 dark:text-gray-400">No more articles to load</p>
		//     )}
		//   </div>
		// </div>
	);
}
