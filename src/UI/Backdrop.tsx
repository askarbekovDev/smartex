import clsx from 'clsx';
import React, { FC } from 'react';

type BackdropProps = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	moveDown?: boolean;
	increaseZ?: boolean;
};

export const Backdrop: FC<BackdropProps> = ({ isOpen, setIsOpen, moveDown, increaseZ }) => {
	return (
		<div
			onClick={() => setIsOpen(false)}
			className={clsx('fixed inset-0 bg-black/40 transition-all duration-300 z-30', {
				'opacity-100 pointer-events-auto': isOpen,
				'opacity-0 pointer-events-none': !isOpen,
				'w450:top-[108px]': moveDown,
				'w450:z-50': increaseZ,
			})}
		></div>
	);
};
