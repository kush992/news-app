import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'About Us | NewsApp',
	description: 'Learn more about NewsApp and our mission to keep you informed.',
};

export default function AboutPage() {
	return (
		<div className='container py-12 mx-auto px-4 md:px-0'>
			<h1 className='text-4xl font-bold mb-8 text-center'>About NewsApp</h1>

			<div className='grid gap-8 md:grid-cols-2 items-center mb-12'>
				<div>
					<h2 className='text-2xl font-semibold mb-4'>Our Mission</h2>
					<p className='text-lg mb-4'>
						At NewsApp, we believe in the power of information. Our mission is to provide you with the most up-to-date and relevant news
						from around the world, helping you stay informed and engaged with the events shaping our global community.
					</p>
					<p className='text-lg mb-4'>
						We strive to deliver news that matters, covering a wide range of topics from politics and technology to entertainment and
						sports. Our commitment to accuracy and impartiality ensures that you receive a balanced view of world events.
					</p>
				</div>
				<div className='relative h-[300px] rounded-lg overflow-hidden'>
					<Image src='/placeholder.svg?height=300&width=400' alt='News gathering' fill className='object-cover' />
				</div>
			</div>

			<div className='mb-12'>
				<h2 className='text-2xl font-semibold mb-4 text-center'>Our Values</h2>
				<div className='grid gap-6 md:grid-cols-3'>
					{[
						{
							title: 'Accuracy',
							description: 'We verify our sources and fact-check our stories to ensure the highest level of accuracy.',
						},
						{ title: 'Impartiality', description: 'We present news without bias, allowing you to form your own opinions.' },
						{
							title: 'Timeliness',
							description: 'We deliver breaking news and updates as they happen, keeping you informed in real-time.',
						},
					].map((value, index) => (
						<Card key={index}>
							<CardContent className='pt-6'>
								<h3 className='text-xl font-semibold mb-2'>{value.title}</h3>
								<p>{value.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>

			<div className='text-center'>
				<h2 className='text-2xl font-semibold mb-4'>Join Us on Our Journey</h2>
				<p className='text-lg mb-6'>
					{"We're"} passionate about keeping you informed and engaged. Start exploring the latest news and see the difference that quality
					journalism can make in your daily life.
				</p>
				<Button asChild size='lg'>
					<Link href='/'>Explore Latest News</Link>
				</Button>
			</div>
		</div>
	);
}
