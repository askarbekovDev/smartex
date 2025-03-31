'use client';

import React, { FC, useState } from 'react';
import { Burger, CloseIcon } from '../../public/icons';
import { headerNavLinks } from '@/utils/constants';
import Link from 'next/link';
import clsx from 'clsx';

export const BurgerMenu: FC = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	return (
		<div className='hidden group relative w1150:block'>
			<div onClick={() => setMenuOpen(true)}>
				<Burger />
			</div>
			<div
				className={clsx(
					'absolute w-[350px] px-14 pt-10 gap-3 z-20 flex flex-col duration-500 transition-all whitespace-nowrap right-0 top-[-28px] bg-white shadow-xl rounded-b-2xl',
					{
						'pointer-events-auto opacity-100 translate-y-0': menuOpen,
						'opacity-0 pointer-events-none translate-y-[-10px]': !menuOpen,
					}
				)}
			>
				<div className='absolute right-8 top-4 cursor-pointer' onClick={() => setMenuOpen(false)}>
					<CloseIcon />
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
				<span className='flex flex-col gap-4 uiBtnText'>
					<Link className='w-full text-center text-white py-3 rounded-lg bg-success mt-2' href='#'>
						Войти
					</Link>
					<Link
						className='w-full text-center py-3 rounded-lg border-[1px] border-success mb-10'
						href='#'
					>
						Регистрация
					</Link>
				</span>
			</div>
		</div>
	);
};
