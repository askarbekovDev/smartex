'use client';

import React, { FC, useState } from 'react';
import { MailIcon } from '../../public/icons';
import clsx from 'clsx';

export const ContactUsPopUp: FC = () => {
	const [feedbackOpen, setFeedbackOpen] = useState<boolean>(false);
	return (
		<>
			<div onClick={() => setFeedbackOpen(true)} className='cursor-pointer'>
				<MailIcon />
			</div>
			<div
				onClick={() => setFeedbackOpen(false)}
				className={clsx(
					'absolute inset-0 bg-black/40 transition-all duration-300 z-30',
					{
						'opacity-100 pointer-events-auto': feedbackOpen,
						'opacity-0 pointer-events-none': !feedbackOpen,
					}
				)}
			>
				<div
					onClick={(e) => e.stopPropagation()}
					className={clsx('ml-20 mt-20 w-[588px] h-[726px] bg-white transition-all duration-300', {
						'scale-100': feedbackOpen,
						'scale-50': !feedbackOpen,
					})}
				></div>
			</div>
		</>
	);
};
