import clsx from 'clsx';
import React, { FC } from 'react';

type BackdropProps = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Backdrop: FC<BackdropProps> = ({ isOpen, setIsOpen }) => {
	return (
		<div
			onClick={() => setIsOpen(false)}
			className={clsx('fixed inset-0 bg-black/40 transition-all duration-300 z-30', {
				'opacity-100 pointer-events-auto': isOpen,
				'opacity-0 pointer-events-none': !isOpen,
			})}
		></div>
	);
};
