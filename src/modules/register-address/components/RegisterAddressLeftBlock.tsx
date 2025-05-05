import Image from 'next/image';
import React from 'react';
import AddressRegAlien from '@/../public/images/address-reg-alien.png';
import AddressRegAlienMob from '@/../public/images/address-reg-alien-mob.png';
import { ThirdShape } from '@/components/shapes/ThirdShape';

export const RegisterAddressLeftBlock = () => {
	return (
		<div className='w-full bg-background'>
			<div className='relative w950:h-[361px] w750:h-[461px] w650:h-[430px] w550:h-[340px] w450:h-[290px]'>
				<ThirdShape />
				<div className='relative w-full h-[300px] w950:h-[0px] flex justify-center items-center'>
					<Image
						src={AddressRegAlien}
						alt='smartex-register-alien'
						width={400}
						height={364}
						className='absolute top-[-150px] w1150:top-[-130px] w950:hidden w550:block w550:w-[201px] w450:w-[161px] w550:left-[30px] w550:top-[-180px]'
					/>
					<Image
						src={AddressRegAlienMob}
						alt='smartex-register-alien'
						width={246}
						height={224}
						className='absolute hidden w950:block top-[0px] w750:top-[80px] w650:top-[30px] w550:hidden left-[60px]'
					/>
				</div>
				<div className='max-w-[475px] w1250:mt-[40px] w1150:mt-[80px] w0150:mt-[110px] flex flex-col justify-center items-center gap-5 m-auto w950:hidden'>
					<h3 className='h3 text-primary_text text-center'>Получите свой заказ!</h3>
					<p className='bodyText text-primary_text text-center'>
						Доверьтесь нашему сервису <br /> Мы{' '}
						<span className='text-secondary font-[700]!'>гарантируем</span> надежную и безопасную
						доставку. Ваши <br /> посылки под{' '}
						<span className='text-secondary font-[700]!'>нашим контролем</span> от покупки до
						момента <br /> получения.
					</p>
				</div>
			</div>
		</div>
	);
};
