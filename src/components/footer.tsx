export function Footer() {
	return (
		<footer className='border-t'>
			<div className='container px-4 lg:px-0 flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 mx-auto'>
				<div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
					<p className='text-center text-sm leading-loose md:text-left'>
						Built by{' '}
						<a href='https://kushbhalodi.com' target='_blank' rel='noreferrer' className='font-medium underline underline-offset-4'>
							Kush Bhalodi
						</a>
						. Powered by{' '}
						<a href='https://newsdata.io/' target='_blank' rel='noreferrer' className='font-medium underline underline-offset-4'>
							newsdata.io
						</a>
						.
					</p>
				</div>
				<p className='text-center text-sm md:text-left'>&copy; {new Date().getFullYear()} NewsApp. All rights reserved.</p>
			</div>
		</footer>
	);
}
