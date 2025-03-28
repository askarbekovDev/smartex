import React, { FC } from 'react';
import { Burger } from '../../public/icons';
import { headerNavLinks } from '@/utils/constants';
import Link from 'next/link';

export const BurgerMenu: FC = () => {
	return (
		<div className='hidden group relative w1150:block cursor-pointer'>
			<Burger />
			<div
				className='absolute w-[350px] px-14 pt-10 gap-3 z-10 flex flex-col whitespace-nowrap right-0 pointer-events-none top-[-28px]
				 bg-white shadow-xl rounded-b-2xl opacity-0 translate-y-[-10px] transition-all duration-300 
						group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0'
			>
				{headerNavLinks.map((navLink, idx) => (
					<Link key={idx} href={navLink.href}>
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
