import { SubHeader } from '@/components/sub-header';
import { CryptoNews } from '@/components/crypto-news';
import { ArchiveNewsList } from '@/components/archive-news-list';
import { CountrySelector } from '@/components/country-selector';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PageProps } from '../../.next/types/app/page';
import { NewsGrid } from '@/components/news-grid';

export default async function Home({ searchParams }: PageProps) {
	const { category, country } = await searchParams;

	return (
		<main className='container py-6 space-y-6 mx-auto px-4 md:px-0'>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl font-bold tracking-tight'>Latest News</h1>
				<CountrySelector />
			</div>
			<Tabs defaultValue='latest' className='space-y-4 w-full'>
				<TabsList className='overflow-x-scroll'>
					<TabsTrigger value='latest'>Latest News</TabsTrigger>
					<TabsTrigger value='archive' disabled>
						Archive
					</TabsTrigger>
					<TabsTrigger value='crypto' disabled>
						Crypto News
					</TabsTrigger>
				</TabsList>

				<SubHeader />

				<TabsContent value='latest'>
					<NewsGrid category={category || 'top'} country={country || ''} />
				</TabsContent>
				<TabsContent value='archive'>
					<ArchiveNewsList category={category || 'top'} />
				</TabsContent>
				<TabsContent value='crypto'>
					<CryptoNews />
				</TabsContent>
			</Tabs>
		</main>
	);
}
