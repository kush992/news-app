'use client';

import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Category } from '@/types/news';

interface CategoryFilterProps {
	categories: Category[];
	currentCategory: Category;
}

export default function CategoryFilter({ categories, currentCategory }: CategoryFilterProps) {
	const router = useRouter();

	return (
		<Select
			defaultValue={currentCategory}
			onValueChange={(value: Category) => {
				const url = new URL(window.location.href);
				url.searchParams.set('category', value);
				router.push(url.toString());
			}}
		>
			<SelectTrigger className='w-[180px]'>
				<SelectValue placeholder='Select category' />
			</SelectTrigger>
			<SelectContent>
				{categories.map((cat) => (
					<SelectItem key={cat} value={cat}>
						{cat.charAt(0).toUpperCase() + cat.slice(1)}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
