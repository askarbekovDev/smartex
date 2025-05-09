import React from 'react';
import PrimaryShape from '../../../public/images/shape-1.png';
import SecondaryShape from '../../../public/images/sub-shape-1.png';
import Image from 'next/image';
import { LogoWithText } from '../../../public/icons';

export const RegisterDesktopShape = () => {
	return (
		<div className='relative w-full h-[418px] w550:h-[390px] w450:h-[350px] transform w950:-translate-y-[157px] w750:-translate-y-[0px]'>
			<div className='w-full h-full'>
				<Image
					src={PrimaryShape}
					alt='smartex-primary-shape'
					width={649}
					height={418}
					priority
					className='w950:w-full'
				/>
			</div>
			<div className='absolute top-0 right-0  w-[56.3%]'>
				<Image src={SecondaryShape} alt='smartex-secondary-shape' className='w-full h-full' />
			</div>
			<div className='absolute w-[170px] w450:w-[92px] top-[140px] w950:top-[257px] w750:top-[180px] w550:top-[130px] w450:top-[60px] left-[52px] w450:left-[36px] text-white flex flex-col gap-[7px]'>
				<LogoWithText />
				<hr />
				<p className='font-normal text-[12px] leading-4'>Доставка,на которую можно положиться.</p>
			</div>
		</div>
	);
};
