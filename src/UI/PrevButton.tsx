import React from 'react';
import { ArrowLeft } from '../../public/icons/arrow-left';

export const PrevButton = () => {
	return (
		<div className='w-[156px] w450:w-auto h-[34px] flex justify-between w450:justify-center items-center mt-4'>
			<button className='w-[34px] h-full flex justify-center items-center bg-primary border border-border text-white rounded-l-[4px] hover:bg-primary_hover cursor-pointer'>
				<ArrowLeft />
			</button>
			<div className='bodySmall w450:hidden flex justify-center items-center bg-transparent text-info h-full px-[12px] border border-border rounded-l-[4px]'>
				Предыдущий
			</div>
		</div>
	);
};
