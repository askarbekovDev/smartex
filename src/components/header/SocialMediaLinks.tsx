import Link from 'next/link';
import React, { FC } from 'react';
import { InstagramIcon, TelegramIcon } from '../../../public/icons';
import { ContactUsForm } from './ContactUsForm';

export const SocialMediaLinks: FC = () => {
	return (
		<div className='flex items-center gap-4'>
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
