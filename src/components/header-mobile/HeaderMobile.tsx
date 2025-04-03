'use client';

import clsx from 'clsx';
import React, { FC, useState } from 'react';
import { BurgerMobile, CloseIconMobile } from '../../../public/icons';
import Link from 'next/link';
import Image from 'next/image';
import { MobileNumsMenu, SocialMediaLinks } from '../header/index';

export const HeaderMobile: FC = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	return (
		<div
			className={clsx(
				'hidden container w550:block h-[108px] border-b-1 transition-all duration-500',
				{
					'bg-primary border-primary': menuOpen,
					'bg-background border-border': !menuOpen,
				}
			)}
		>
			<div className='relative flex justify-between items-end border-border border-r-1 border-l-1 w-full h-full'>
				<div
					className={clsx('absolute bottom-4 left-4 transition-all duration-500', {
						'translate-y-0 pointer-events-auto': !menuOpen,
						'translate-y-14 pointer-events-none': menuOpen,
					})}
				>
					<Link href='/'>
						<Image src='images/main-logo.svg' width={110} height={34} alt='Smartex' />
					</Link>
				</div>
				<div className={clsx('pl-4 pb-3 transition-all duration-500',
          {'translate-x-0 opacity-100 pointer-events-auto': menuOpen,
						'translate-x-50 opacity-0 pointer-events-none': !menuOpen,}
        )}>
					<MobileNumsMenu />
					<SocialMediaLinks />
				</div>
				<div
					onClick={() => setMenuOpen(!menuOpen)}
					className='flex justify-center items-center w-17 h-17 border-border border-l-1 border-t-1 rounded-tl-[20px]'
				>
					{menuOpen ? <CloseIconMobile /> : <BurgerMobile />}
				</div>
			</div>
		</div>
	);
};
