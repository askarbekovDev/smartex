'use client';

import React, { FC, useState } from 'react';
import { CloseIcon, MailIcon } from '../../public/icons';
import clsx from 'clsx';
import { Backdrop } from '@/UI/Backdrop';

export const ContactUsPopUp: FC = () => {
	const [feedbackOpen, setFeedbackOpen] = useState<boolean>(false);
	return (
		<>
			<Backdrop isOpen={feedbackOpen} setIsOpen={setFeedbackOpen} />
			<div onClick={() => setFeedbackOpen(true)} className='cursor-pointer'>
				<MailIcon />
			</div>
			<div
				className={clsx(
					'absolute top-12 rounded-2xl max-w-[588px] w-full h-fit bg-white transition-all duration-300 z-40',
					{
						'scale-100 opacity-100': feedbackOpen,
						'scale-50 opacity-0': !feedbackOpen,
					}
				)}
			>
				<h4 className='h4 text-secondary-text p-12'>Свяжитесь с нами</h4>
				<div
					onClick={() => setFeedbackOpen(false)}
					className='absolute top-5 right-8 cursor-pointer'
				>
					<CloseIcon />
				</div>
			</div>
		</>
	);
};
