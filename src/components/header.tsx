import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

export function Header() {
	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container px-4 md:px-0 flex h-14 items-center mx-auto'>
				<Link href='/' className='flex items-center space-x-2'>
					<span className='font-bold text-xl'>NewsApp</span>
				</Link>
				<nav className='ml-auto flex items-center space-x-4'>
					<Link href='/' className='text-sm font-medium transition-colors hover:text-primary'>
						Home
					</Link>
					<Link href='/about' className='text-sm font-medium transition-colors hover:text-primary'>
						About
					</Link>
					<ModeToggle />
				</nav>
			</div>
		</header>
	);
}
