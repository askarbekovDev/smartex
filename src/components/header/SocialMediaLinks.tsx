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
				'flex items-center gap-4 w550:pl-4 w550:pb-3 w550:transition-all w550:duration-500',
				{
					'w550:opacity-100 w550:pointer-events-auto': menuOpen,
					'w550:translate-x-50 w550:opacity-0 w550:pointer-events-none': !menuOpen,
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
