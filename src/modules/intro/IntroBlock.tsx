import Image from 'next/image';
import React, { FC } from 'react';

export const IntroBlock: FC = () => {
	return (
		<div className='container'>
			<Image alt='placeholder' src='/images/1140x600.svg' width={1140} height={600} />
		</div>
	);
};
