import React, { FC } from 'react';
import { AlienCardEmoji } from '../../public/icons';
import Image from 'next/image';

type WhatWeDoCardProps = {
	text: string;
	image: string;
};

export const WhatWeDoCard: FC<WhatWeDoCardProps> = ({ text, image }) => {
	return (
		<div>
			<div className='p-5 pb-3'>
				<AlienCardEmoji />
			</div>
			<p className='bodyText px-4'>{text}</p>
			<Image alt='Card img' src={image} />
		</div>
	);
};
