'use client';

import React, { FC, useState } from 'react';
import { BurgerTablet } from '../../../public/icons';
import { Backdrop } from '@/UI/Backdrop';
import { DropDownMenu } from './DropDownMenu';

export const BurgerMenu: FC = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	return (
		<>
			<Backdrop isOpen={menuOpen} setIsOpen={setMenuOpen} />
			<div className='hidden relative w1150:block'>
				<div className='cursor-pointer py-1 pl-2' onClick={() => setMenuOpen(true)}>
					<BurgerTablet />
				</div>
				<DropDownMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			</div>
		</>
	);
};
