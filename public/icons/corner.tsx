import React, { FC } from 'react';

export const Corner: FC = () => {
	return (
		<svg viewBox='0 0 100 100' className='w-full h-full'>
			<path d='M 0 100 Q 0 0 100 0 L 0 0 Z' fill='var(--background)' />
		</svg>
	);
};
