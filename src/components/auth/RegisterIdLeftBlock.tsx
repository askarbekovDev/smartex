import Image from 'next/image';
import React from 'react';
import AstronautGreenAlien from '../../../public/images/astronaut-green-alien.png';
import { RegisterIdShape } from '@/components/shapes/RegisterIdShape';

export const RegisterIdLeftBlock = () => {
	return (
		<div className='w-full bg-background'>
			<div className='relative flex flex-col justify-center items-center'>
				<RegisterIdShape />
				<Image
					src={AstronautGreenAlien}
					alt='smartex-register-id-alien'
					width={400}
					height={366}
					className='mt-[17px] w950:absolute w750:relative w950:w-[276px] w950:top-[90px] w750:mt-0 w450:mt-[30px] w750:top-0 w950:right-[220px] w850:right-[170px] w750:right-0'
				/>
				<div className='max-w-[475px] mt-[66px] w1250:mt-[100px] w1150:mt-[140px] w0150:mt-[170px] flex flex-col justify-center items-center gap-5 m-auto w950:hidden'>
					<h3 className='h3 text-primary_text text-center'>Отслеживать заказ!</h3>
					<p className='bodyText text-primary_text text-center'>
						Легко <span className='text-secondary font-[700]!'>отслеживай</span> свой заказ <br />{' '}
						Будь в курсе на каждом этапе доставки. Получай{' '}
						<span className='text-secondary font-[700]!'>уведомления</span> <br /> и отслеживай свои
						посылки в реальном времени
					</p>
				</div>
			</div>
		</div>
	);
};
