import Image from 'next/image';
import React from 'react';

type ShopsItem = {
	id: number;
	images: string;
	titles: string;
};

type ShopsItemProps = {
	options: ShopsItem[];
};

export const ShopsItemContent = ({ activeCategory }: { activeCategory: ShopsItemProps }) => {
	return (
		<div className='w-full w750:hidden border border-border p-4 rounded-[18px]'>
			<div className='grid grid-cols-4 w1150:grid-cols-3 w950:grid-cols-2 gap-x-[12px] gap-y-[16px]'>
				{activeCategory?.options?.map((brand) => (
					<div
						key={brand.id}
						className='w-full max-w-[170px] h-[60px] border border-border p-1 flex items-center justify-center rounded-[10px]'
					>
						<Image
							src={brand.images}
							alt={brand.titles}
							width={170}
							height={45}
							className='object-contain max-w-full max-h-full'
						/>
					</div>
				))}
			</div>
		</div>
	);
};
