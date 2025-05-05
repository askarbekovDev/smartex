import React from 'react';
import { ArrowRight } from '../../public/icons';

export const NextButton = () => {
	return (
		<div className='w-[156px] w450:w-auto h-[34px] flex justify-between w450:justify-center items-center mt-4'>
			<div className='bodySmall w450:hidden flex justify-center items-center bg-transparent text-info h-full px-[12px] border border-border rounded-r-[4px]'>
				Следующий
			</div>
			<button
				type='submit'
				className='w-[34px] h-full flex justify-center items-center bg-primary border border-border text-white hover:bg-primary_hover rounded-r-[4px] cursor-pointer'
			>
				<ArrowRight />
			</button>
		</div>
	);
};
