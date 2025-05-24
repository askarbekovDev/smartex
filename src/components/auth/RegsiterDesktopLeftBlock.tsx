import { RegisterDesktopShape } from '@/components/shapes/RegisterDesktopShape';
import Image from 'next/image';
import RegisterSmartexAlien from '../../../public/images/register-alien.png';

export const RegsiterDesktopLeftBlock = () => {
	return (
		<div className='w-full bg-background'>
			<div className='relative'>
				<RegisterDesktopShape />
				<div className='relative w-full h-[300px] w950:h-[0px] flex justify-center items-center'>
					<Image
						src={RegisterSmartexAlien}
						alt='smartex-register-alien'
						width={400}
						height={364}
						className='absolute top-[-140px] w950:w-[218px] w950:top-[-200px] w950:right-[36px] w750:top-[-100px] w650:top-[-170px] w550:top-[-170px] w450:top-[-160px] w750:right-0'
					/>
				</div>
				<div className='max-w-[475px] flex flex-col justify-center items-center m-auto w950:hidden'>
					<h3 className='h3 text-primary_text text-center'>Покупайте онлайн !</h3>
					<p className='bodyText text-primary_text text-center mt-5'>Покупай онлайн</p>
					<p className='bodyText text-primary_text text-center'>
						Оформляй заказы в <span className='text-secondary font-[700]!'>США</span>,{' '}
						<span className='text-secondary font-[700]!'>Турции</span> и{' '}
						<span className='text-secondary font-[700]!'>Китае</span> легко и быстро. Просто выбери
						товары в своих любимых магазинах, а мы позаботимся о доставке
					</p>
				</div>
			</div>
		</div>
	);
};
