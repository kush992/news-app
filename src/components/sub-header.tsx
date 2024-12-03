'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Category } from '@/types/news';

const popularCategories: Category[] = [
	'top',
	'business',
	'technology',
	'entertainment',
	'sports',
	'environment',
	'food',
	'health',
	'politics',
	'science',
	'world',
];

export function SubHeader() {
	const [activeCategory, setActiveCategory] = useState<Category>('top');
	const router = useRouter();

	const handleCategoryClick = (category: Category) => {
		setActiveCategory(category);
		router.push(`/?category=${category}`);
	};

	return (
		<nav className='py-4 mb-6 rounded-lg w-full'>
			<ul className='flex space-x-4 overflow-x-scroll'>
				{popularCategories.map((category) => (
					<li key={category}>
						<button
							onClick={() => handleCategoryClick(category)}
							className='relative px-3 py-2 rounded-md text-sm font-medium transition-all hover:underline'
						>
							{category.charAt(0).toUpperCase() + category.slice(1)}
							{activeCategory === category && (
								<motion.div className='absolute bottom-0 left-0 -z-10 right-0 h-full rounded-md bg-secondary' layoutId='background' />
							)}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
}
