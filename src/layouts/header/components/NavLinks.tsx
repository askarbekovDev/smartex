import { headerNavLinks } from '@/utils/constants';
import Link from 'next/link';
import React, { FC } from 'react';

export const NavLinks: FC = () => {
	return (
		<nav className='flex items-center gap-5 uiNavLink w1350:gap-3 w1150:hidden'>
			{headerNavLinks.map((navLink, idx) => (
				<Link
					className='hover:text-secondary hover:underline underline-offset-4 decoration-[1px]'
					key={idx}
					href={navLink.href}
				>
					{navLink.title}
				</Link>
			))}
			<span className='flex gap-5 uiBtnText w1350:gap-3'>
				<Link className='text-white px-4 py-2 rounded-2xl bg-success hover:bg-success_hover transition-all duration-200' href='#'>
					Войти
				</Link>
				<Link className='px-4 py-2 rounded-2xl border-[1px] bg-background border-success hover:bg-background_hover transition-all duration-200' href='#'>
					Регистрация
				</Link>
			</span>
		</nav>
	);
};
