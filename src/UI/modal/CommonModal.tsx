'use client';

import { Backdrop } from '@/UI';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { CloseIconTablet } from '../../../public/icons';
import { IModalProps } from './modal.types';

export const CommonModal = ({ title, feedbackOpen, setFeedbackOpen, children }: IModalProps) => {
	useEffect(() => {
		const handleBackButton = () => {
			setFeedbackOpen(false);
			window.history.replaceState(null, '', window.location.pathname);
		};
		if (feedbackOpen) {
			window.history.pushState(null, '', window.location.pathname);
			window.addEventListener('popstate', handleBackButton);
		} else {
			window.removeEventListener('popstate', handleBackButton);
		}
		return () => window.removeEventListener('popstate', handleBackButton);
	}, [feedbackOpen]);

	return (
		<>
			<Backdrop isOpen={feedbackOpen} setIsOpen={setFeedbackOpen} increaseZ={true} />
			<div
				className={clsx(
					`absolute top-14 transition-all duration-300 z-50 px-5 max-w-[588px] w-full pointer-events-none
                         transform -translate-x-1/2 right-1/2 left-1/2 w750:px-9 w550:px-6 w450:px-0 w450:top-9`,
					{
						'scale-100 opacity-100': feedbackOpen,
						'scale-50 opacity-0': !feedbackOpen,
					}
				)}
			>
				<div
					className={clsx(
						`relative rounded-2xl w-full h-fit bg-white p-12 w750:p-10 pointer-events-auto w550:bg-background w550:px-7 w450:px-5`,
						{ 'pointer-events-none': !feedbackOpen }
					)}
				>
					<h4 className='h4 text-secondary-text'>{title}</h4>
					<div
						onClick={() => setFeedbackOpen(false)}
						className='absolute top-5 right-8 cursor-pointer w550:right-6 w450:right-4 w370:hidden'
					>
						<CloseIconTablet />
					</div>

					{children}
				</div>
			</div>
		</>
	);
};
