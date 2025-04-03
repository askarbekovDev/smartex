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
				<div className='container'>
					<div
						className='flex items-center justify-between w-full h-10 border-transparent w550:flex-col-reverse 
						 w550:items-start w550:justify-start w550:h-[108px] w550:border-x-1 w550:border-border w550:relative w550:pl-4'
					>
						<div className='hidden w550:block w-17 h-17 rounded-tl-[20px] absolute border-border border-1 border-r-0 border-b-0 right-0'>
							<div className='h-full flex justify-center items-center'>
								<BurgerMenu />
							</div>
						</div>
						<div className='flex items-center gap-4 w550:pb-4'>
							<Link href='#'>
								<InstagramIcon />
							</Link>
							<Link href='#'>
								<TelegramIcon />
							</Link>
							<ContactUsForm />
						</div>
						<div className='flex items-center h-full relative group w550:h-fit w550:py-2 w550:mb-2'>
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
			</div>
			<div className='container bg-red-200 flex items-center justify-between w-full h-20'>
				<Link href='/'>
					<Image src='images/main-logo.svg' width={110} height={34} alt='Smartex' />
				</Link>
				<div className='w550:hidden'>
					<BurgerMenu />
				</div>
				<NavLinks />
			</div>
		</header>
	);
};
