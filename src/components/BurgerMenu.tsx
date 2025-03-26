import React, { FC } from 'react';
import { Burger } from '../../public/icons';

export const BurgerMenu: FC = () => {
	return (
		<div className='hidden group relative w1150:block cursor-pointer hover:bg-red-400'>
			<Burger />
			<div
				className='w-10 h-10 absolute left-[-10px] pointer-events-none top-[39px] bg-white shadow-xl rounded-b-2xl opacity-0 translate-y-[-10px] 
            transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 px-4 py-[10px]'
			>
				dv
			</div>
		</div>
	);
};
