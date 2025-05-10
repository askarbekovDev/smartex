import { RegisterDesktopShape } from '@/components/shapes/RegisterDesktopShape';
import RegisterSmartexAlien from '../../../public/images/register-alien.png';
import React from 'react';
import Image from 'next/image';

export const ForgotPasswordLeftBlock = () => {
	return (
		<div className='w-full bg-background'>
			<div className='relative'>
				<RegisterDesktopShape />
				<div className='relative w-full w950:h-[0px] flex justify-center items-center'>
					<Image
						src={RegisterSmartexAlien}
						alt='smartex-register-alien'
						width={400}
						height={364}
						className='w950:absolute w950:w-[218px] w950:top-[-200px] w950:right-[36px] w750:top-[-100px] w650:top-[-170px] w550:top-[-170px] w450:top-[-160px] w750:right-0'
					/>
				</div>
			</div>
		</div>
	);
};
