import React from 'react';
import { PaginationLeftArrow } from '../../public/icons/paginationLeftArrow';
import { PaginationRightArrow } from '../../public/icons/paginationRightArrow';

export const Pagination = () => {
	return (
		<div className='relative w-[256px] h-[58px] w950:w-[125px] w950:h-[36px] rounded-[70px] bg-primary border border-[#CAC9C9]'>
			<button
				className='absolute cursor-pointer top-1/2 left-[11px] w950:left-[3px] transform -translate-y-1/2 w-[43px] h-[43px] w950:w-[30px] 
			w950:h-[30px] rounded-[50%] bg-secondary hover:bg-secondary_hover transition-all duration-200 border-[#CAC9C9] flex justify-center items-center'
			>
				<PaginationLeftArrow />
			</button>
			<button
				className='absolute cursor-pointer top-1/2 right-[11px] w950:right-[3px] transform -translate-y-1/2 w-[43px] h-[43px] w950:w-[30px] w950:h-[30px] 
			rounded-[50%] bg-secondary hover:bg-secondary_hover transition-all duration-200 border-[#CAC9C9] flex justify-center items-center'
			>
				<PaginationRightArrow />
			</button>
		</div>
	);
};
