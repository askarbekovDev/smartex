import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AppStore from '../../../../public/icons/app-store.svg';
import Left from '../../../../public/icons/arrow-left-icon.svg';
import Right from '../../../../public/icons/arrow-right-icon.svg';
import GoogleMarket from '../../../../public/icons/google.svg';
import Phone from '../../../../public/icons/iphone-icon.png';
import Green from '../../../../public/images/bg-fon-green.png';
import White from '../../../../public/images/bg-fon-white.png';

export const MobileDownload = () => {
	return (
		<div className='w1440:hidden hidden__block w650:w-full w650:h-[360px] w650:mt-5 w650:flex w650:flex-col w650:gap-2'>
			<div className='flex flex-col container gap-6 '>
				<p className='h4 text-primary'>
					Загрузите наше приложение, <br />
					чтобы
					<span className='text-warning mx-1'>отслеживать</span> <br /> Ваши заказы
				</p>
				<div className='flex gap-2'>
					<Link href={''}>
						<Image src={GoogleMarket} alt='google-market' />
					</Link>
					<Link href={''}>
						<Image src={AppStore} alt='app-store' />
					</Link>
				</div>
			</div>
			{/*  */}
			<div className='bg-white relative mt-4 w-full h-[360px] w850:h-[330px]  w650:h-[250px]'>
				<Image src={White} alt='white' className='w-full h-[360px] w850:h-[330px] w650:h-[250px]' />
				<Image
					src={Green}
					alt='green'
					className='absolute w-[95%] top-0 right-[-5px] h-[360px] w850:h-[330px] w650:h-[250px] w650:right-0 '
				/>
				<Image
					src={Left}
					alt='left'
					className='h-fit absolute top-[90px] right-[300px] w850:w-[30px] w850:right-[240px] w850:top-[110px] w650:h-[250px] w650:top-[10px] w370:right-[200px]'
				/>
				<Image
					src={Phone}
					alt='phone'
					className=' absolute top-14 w-[360px] right-3 w850:w-[280px] w850:top-[18] w650:top-[25px] w370:right-0'
				/>
				<Image
					src={Right}
					alt='right'
					className='h-fit absolute bottom-16 right-4 w850:w-[70px] w650:bottom-[35px] w650:right-12 w650:w-[55px] w370:right-8'
				/>
			</div>
		</div>
	);
};
