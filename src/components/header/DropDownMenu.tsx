'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React, { FC, useEffect } from 'react';
import { CloseIconTablet } from '../../../public/icons';
import { headerNavLinks } from '@/utils/constants';

type DropDownMenuProps = {
	menuOpen: boolean;
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DropDownMenu: FC<DropDownMenuProps> = ({ menuOpen, setMenuOpen }) => {
	useEffect(() => {
		const isMobile = window.innerWidth < 450;

		if (menuOpen && isMobile) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [menuOpen]);

	return (
		<div
			onClick={(e) => e.stopPropagation()}
			className={clsx(
				`absolute w-[350px] px-14 py-10 gap-3 z-40 flex flex-col transition-all duration-500 whitespace-nowrap right-0 top-[-24px] 
				 bg-white shadow-xl rounded-b-2xl w750:w-[300px] w750:px-10 w450:top-[107px] w450:w-full w450:rounded-b-none w450:px-px
         w450:shadow-none w450:-translate-x-1/2 w450:left-1/2 w450:h-screen w450:bg-red-00`,
				{
					'pointer-events-auto opacity-100 translate-y-0': menuOpen,
					'opacity-0 pointer-events-none translate-y-[-10px] w450:translate-y-[-40px]': !menuOpen,
				}
			)}
		>
			<div className='hidden w450:block absolute h-full bg-white top-0 w-[21px] left-[-21px] w370:w-[17px] w370:left-[-17px]' />
			<div className='hidden w450:block absolute h-full bg-white top-0 w-[21px] right-[-21px] w370:w-[17px] w370:right-[-17px]' />
			<div
				className='absolute right-8 top-4 cursor-pointer w750:right-6 w450:hidden'
				onClick={() => setMenuOpen(false)}
			>
				<CloseIconTablet />
			</div>
			{headerNavLinks.map((navLink, idx) => (
				<Link
					className='hover:text-secondary hover:border-b-secondary border-b-1 border-transparent'
					key={idx}
					href={navLink.href}
				>
					{navLink.title}
				</Link>
			))}
			<span className='flex flex-col gap-4 uiBtnText mt-2 w450:pt-4'>
				<Link className='w-full text-center text-white py-3 rounded-lg bg-success' href='#'>
					Войти
				</Link>
				<Link className='w-full text-center py-3 rounded-lg border-[1px] border-success' href='#'>
					Регистрация
				</Link>
			</span>
		</div>
	);
};
