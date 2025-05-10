import React from 'react';

export const ScrollBar = ({ scrollPercent }: { scrollPercent: number }) => {
	return (
		<div className='w-[16px] max-h-[500px] flex w750:hidden bg-border relative rounded-[100px] overflow-hidden'>
			<div
				className='absolute left-1/2 transform -translate-x-1/2 w-[10px] bg-secondary rounded-[100px] transition-all duration-200'
				style={{
					height: '120px',
					top: `min(calc(${scrollPercent}% + 5px), calc(100% - 120px - 5px))`,
				}}
			/>
		</div>
	);
};
