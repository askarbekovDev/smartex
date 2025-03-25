import React, { FC } from 'react';
import { InstagramIcon, MailIcon, PhoneIcon, TelegramIcon } from '../../../public/icons/index';
import Link from 'next/link';
import Image from 'next/image';
import { headerNavLinks } from '@/utils/constants';

export const Header: FC = () => {
	return (
		<header className='w-full h-30'>
			<div className='bg-primary w-full'>
				<div className='container flex items-center justify-between w-full h-10'>
					<div className='flex items-center gap-4'>
						<Link href='#'>
							<InstagramIcon />
						</Link>
						<Link href='#'>
							<TelegramIcon />
						</Link>
						<Link href='#'>
							<MailIcon />
						</Link>
					</div>
					<div className='flex items-center gap-2'>
						<PhoneIcon />
						<Link href='#' className='uiNavLink text-white'>
							Связаться с нами
						</Link>
					</div>
				</div>
			</div>
			<div className='container flex items-center justify-between w-full h-20  px-[150px]'>
				<Link href='/'>
					<Image src='images/main-logo.svg' width={110} height={34} alt='Smartex' />
				</Link>
				<div className='flex gap-5 uiNavLink'>
					{headerNavLinks.map((navLink) => (
						<Link
							className='hover:text-secondary hover:underline underline-offset-4 decoration-[1px]'
							href={navLink.href}
						>
							{navLink.title}
						</Link>
					))}
				</div>
			</div>
		</header>
	);
};
