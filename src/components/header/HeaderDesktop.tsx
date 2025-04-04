import Link from 'next/link';
import React, { FC } from 'react';
import Image from 'next/image';
import { BurgerMenu, MobileNumsMenu, NavLinks, SocialMediaLinks } from '@/components/header';

export const HeaderDesktop: FC = () => {
	return (
		<div className='w-full h-30 w450:hidden'>
			<div className='bg-primary w-full'>
				<div className='container h-10 flex items-center justify-between'>
					<SocialMediaLinks />
					<MobileNumsMenu />
				</div>
			</div>
			<div className='container flex items-center justify-between w-full h-20'>
				<Link href='/'>
					<Image src='images/main-logo.svg' width={110} height={34} alt='Smartex' />
				</Link>
				<BurgerMenu />
				<NavLinks />
			</div>
		</div>
	);
};
