import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsById } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { PageProps } from '../../../../.next/types/app/news/[id]/page';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { id } = await params;
	const article = await getNewsById(id);

	if (!article) return { title: 'News Article Not Found' };

	return {
		title: article.title,
		description: article.description,
		openGraph: {
			title: article.title,
			description: article.description,
			images: article.image_url ? [{ url: article.image_url }] : [],
		},
	};
}

export default async function NewsPage({ params }: PageProps) {
	const { id } = await params;
	const article = await getNewsById(id);

	if (!article) notFound();

	return (
		<article className='container mx-auto px-4 py-8 md:px-0'>
			<h1 className='text-3xl font-bold mb-4'>{article.title}</h1>
			<div className='mb-4 text-sm text-gray-600 dark:text-gray-400'>
				<time dateTime={article.pubDate}>{formatDate(article.pubDate)}</time>
				{article.creator && <span> | By {article.creator}</span>}
			</div>
			{article.image_url && (
				<div className='mb-6'>
					<Image src={article.image_url} alt={article.title} width={800} height={450} className='rounded-lg object-cover' />
				</div>
			)}
			<div className='prose dark:prose-invert max-w-none mb-6' dangerouslySetInnerHTML={{ __html: article.content }} />
			{article.video_url && (
				<div className='mb-6'>
					<video src={article.video_url} controls className='w-full rounded-lg'>
						Your browser does not support the video tag.
					</video>
				</div>
			)}
			<div className='mb-4'>
				<h2 className='text-xl font-semibold mb-2'>Additional Information</h2>
				<ul className='list-disc list-inside'>
					<li>Country: {article.country.join(', ')}</li>
					<li>Category: {article.category.join(', ')}</li>
					{article.sentiment && <li>Sentiment: {article.sentiment}</li>}
				</ul>
			</div>
			<Link
				href={article.link}
				target='_blank'
				rel='noopener noreferrer'
				className='inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors'
			>
				Read full article at source
			</Link>
		</article>
	);
}
