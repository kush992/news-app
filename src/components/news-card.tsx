import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { NewsArticle } from '@/types/news';
import { Calendar } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { Badge } from './ui/badge';

interface NewsCardProps {
	article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
	return (
		<Card className='overflow-hidden flex flex-col'>
			<Link href={`/news/${article.article_id}`} className='flex-grow'>
				{article?.image_url && (
					<div className='relative w-full h-48'>
						<Image src={article?.image_url} alt={article.title} fill className='object-cover' />
					</div>
				)}
				<CardHeader>
					<div className='flex items-center gap-2 text-sm text-muted-foreground'>
						<Calendar className='h-4 w-4' />
						<time dateTime={article.pubDate}>{formatDate(article.pubDate)}</time>
					</div>
					<h2 className='text-lg font-semibold hover:underline'>{article.title}</h2>
				</CardHeader>
				<CardContent className='flex-1'>
					<p className='text-muted-foreground line-clamp-3'>{article.description}</p>
				</CardContent>
			</Link>
			<CardFooter className='flex flex-wrap gap-2'>
				{article.category.map((cat) => (
					<Badge
						key={cat}
						className='dark:text-primary dark:bg-accent inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
					>
						{cat}
					</Badge>
				))}
			</CardFooter>
		</Card>
	);
}
