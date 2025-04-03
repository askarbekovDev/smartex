'use client';

import React, { FC, useState } from 'react';
import { BurgerTablet, CloseIconTablet } from '../../public/icons';
import { headerNavLinks } from '@/utils/constants';
import Link from 'next/link';
import clsx from 'clsx';
import { Backdrop } from '@/UI/Backdrop';

export const BurgerMenu: FC = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	return (
		<>
			<Backdrop isOpen={menuOpen} setIsOpen={setMenuOpen} />
			<div className='hidden group relative w1150:block'>
				<div className='cursor-pointer py-1 pl-2' onClick={() => setMenuOpen(true)}>
					<BurgerTablet />
				</div>
				<div
					className={clsx(
						`absolute w-[350px] px-14 py-10 gap-3 z-40 flex flex-col transition-all duration-500 whitespace-nowrap right-0 top-[-24px] 
						bg-white shadow-xl rounded-b-2xl w750:w-[300px] w750:px-10 w550:w-[250px] w550:px-8 w550:gap-2 w550:pb-6`,
						{
							'pointer-events-auto opacity-100 translate-y-0': menuOpen,
							'opacity-0 pointer-events-none translate-y-[-10px]': !menuOpen,
						}
					)}
				>
					<div
						className='absolute right-8 top-4 cursor-pointer w750:right-6 w550:right-4'
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
					<span className='flex flex-col gap-4 uiBtnText mt-2 w550:gap-3'>
						<Link className='w-full text-center text-white py-3 rounded-lg bg-success' href='#'>
							Войти
						</Link>
						<Link
							className='w-full text-center py-3 rounded-lg border-[1px] border-success'
							href='#'
						>
							Регистрация
						</Link>
					</span>
				</div>
			</div>
		</>
	);
};
