import clsx from 'clsx';
import Link from 'next/link';
import React, { FC } from 'react';
import { CloseIconTablet } from '../../../public/icons';
import { headerNavLinks } from '@/utils/constants';

type DropDownMenuProps = {
	menuOpen: boolean;
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DropDownMenu: FC<DropDownMenuProps> = ({ menuOpen, setMenuOpen }) => {
	return (
		<div
			onClick={(e) => e.stopPropagation()}
			className={clsx(
				`absolute w-[350px] px-14 py-10 gap-3 z-40 flex flex-col transition-all duration-500 whitespace-nowrap right-0 top-[-24px] 
						bg-white shadow-xl rounded-b-2xl w750:w-[300px] w750:px-10
            w550:top-[107px] w550:w-full w550:rounded-b-none w550:px-px w550:shadow-none w550:-translate-x-1/2 w550:left-1/2`,
				{
					'pointer-events-auto opacity-100 translate-y-0': menuOpen,
					'opacity-0 pointer-events-none translate-y-[-10px] w550:translate-y-[-40px]': !menuOpen,
				}
			)}
		>
			<div className='hidden w550:block absolute h-full w-10 bg-white top-0 left-[-39px]' />
			<div
				className='hidden w550:block absolute h-full w-[26px] bg-whte top-0 right-[-26px] bg-white
                   w450:w-[21px] w450:right-[-21px] w370:w-[17px] w370:right-[-17px]'
			/>
			<div
				className='absolute right-8 top-4 cursor-pointer w750:right-6 w550:hidden'
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
				<Link className='w-full text-center py-3 rounded-lg border-[1px] border-success' href='#'>
					Регистрация
				</Link>
			</span>
		</div>
	);
};
