import React, { FC } from 'react';
import {
	InstagramIcon,
	PhoneIcon,
	PhoneIconBlack,
	TelegramIcon,
} from '../../../public/icons/index';
import Link from 'next/link';
import Image from 'next/image';
import { headerContactPhoneNums } from '@/utils/constants';
import { BurgerMenu, ContactUsForm, NavLinks } from '@/components';

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
						<ContactUsForm />
					</div>
					<div className='flex items-center h-full relative group'>
						<Link href='#' className='flex items-center h-full uiNavLink gap-2 text-white'>
							<PhoneIcon />
							<span>Связаться с нами</span>
						</Link>
						<div
							className='absolute left-[-10px] pointer-events-none top-[39px] bg-white shadow-xl rounded-b-2xl opacity-0 translate-y-[-10px] 
            transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 px-4 py-[10px] z-50'
						>
							{headerContactPhoneNums.map((phoneNum, idx) => (
								<div
									key={idx}
									className='flex items-center py-2 pr-5 border-b-[1px] border-b-border last:border-0'
								>
									<Link
										className='flex items-center whitespace-nowrap bodyText hover:text-secondary gap-3'
										href={phoneNum.href}
									>
										<PhoneIconBlack />
										<span>{phoneNum.title}</span>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='container flex items-center justify-between w-full h-20'>
				<Link href='/'>
					<Image src='images/main-logo.svg' width={110} height={34} alt='Smartex' />
				</Link>
				<BurgerMenu />
				<NavLinks />
			</div>
		</header>
	);
};
