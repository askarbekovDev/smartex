import Link from 'next/link';
import React, { FC } from 'react';
import { InstagramIcon, TelegramIcon } from '../../../public/icons';
import { ContactUsForm } from './ContactUsForm';
import clsx from 'clsx';

type SocialMediaProps = {
	menuOpen?: boolean;
};

export const SocialMediaLinks: FC<SocialMediaProps> = ({ menuOpen }) => {
	return (
		<div
			className={clsx(
				'flex items-center gap-4 w450:pl-4 w450:pb-3 w450:transition-all w450:duration-500',
				{
					'w450:opacity-100 w450:pointer-events-auto': menuOpen,
					'w450:translate-x-50 w450:opacity-0 w450:pointer-events-none': !menuOpen,
				}
			)}
		>
			<Link href='#'>
				<InstagramIcon />
			</Link>
			<Link href='#'>
				<TelegramIcon />
			</Link>
			<ContactUsForm />
		</div>
	);
};
