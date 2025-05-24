export const LegalLinks = () => {
	const fullYear = new Date().getFullYear();

	return (
		<div className='w-full bg-secondary flex items-center py-4'>
			<div className='container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center text-primary text-sm gap-2'>
				<p>© {fullYear} All rights reserved.</p>
				<div className='flex gap-6'>
					<p className='cursor-pointer'>Terms of Service</p>
					<p className='cursor-pointer'>Privacy Policy</p>
					<p className='cursor-pointer'>Cookies</p>
				</div>
			</div>
		</div>
	);
};
