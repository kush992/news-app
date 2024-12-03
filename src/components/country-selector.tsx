'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { useRouter } from 'next/navigation';
import { countries } from '@/lib/utils';

export function CountrySelector() {
	const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const toggleCountry = (code: string) => {
		setSelectedCountries((prev) => (prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]));
	};

	const applyCountries = () => {
		const countryParam = selectedCountries.join(',');
		const searchParams = new URLSearchParams(window.location.search);
		searchParams.set('country', countryParam);
		router.push(`?${searchParams.toString()}`);
		setIsOpen(false);
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button variant='outline'>Select Countries</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Select Countries</DialogTitle>
				</DialogHeader>
				<ScrollArea className='h-[300px] p-4'>
					{countries.map((country) => (
						<Button
							key={country.code}
							variant={selectedCountries.includes(country.code) ? 'default' : 'outline'}
							onClick={() => toggleCountry(country.code)}
							className='m-1'
						>
							{country.name}
						</Button>
					))}
				</ScrollArea>
				<Button onClick={applyCountries}>Apply</Button>
			</DialogContent>
		</Dialog>
	);
}
