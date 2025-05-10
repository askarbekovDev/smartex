import React from 'react';
import PrimaryShape from '../../../public/images/primary-shape-3.png';
import SecondaryShape from '../../../public/images/subshape-2.png';
import Image from 'next/image';
import { LogoWithText } from '../../../public/icons';

export const ThirdShape = () => {
	return (
		<div className='relative w-full h-[44%] w550:h-[390px] w450:h-[350px] transform w950:-translate-y-[177px] w750:-translate-y-[0px]'>
			<div className='w-full h-full'>
				<Image
					src={PrimaryShape}
					alt='smartex-primary-shape'
					width={725}
					height={612}
					priority
					className='w-full w950:w-full'
				/>
			</div>
			<div className='absolute top-[-70px] left-[-61.6px] w1150:top-[-55px] w-[56.3%]'>
				<Image src={SecondaryShape} alt='smartex-secondary-shape' className='w-full h-full' />
			</div>
			<div className='absolute w-[170px] text-white flex flex-col gap-[7px] top-[140px] w1350:top-[100px]  w1150:top-[70px] w950:top-[257px] w750:top-[180px] w550:top-[130px] w450:w-[92px] w450:top-[60px] right-[52px] w450:right-[36px]'>
				<LogoWithText />
				<hr />
				<p className='font-normal text-[12px] leading-4'>Доставка,на которую можно положиться.</p>
			</div>
		</div>
	);
};
