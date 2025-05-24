import Image from 'next/image';
import Link from 'next/link';
import AppStore from '../../../../public/icons/app-store.svg';
import Left from '../../../../public/icons/arrow-left-icon.svg';
import Right from '../../../../public/icons/arrow-right-icon.svg';
import GoogleMarket from '../../../../public/icons/Google.svg';
import Phone from '../../../../public/icons/iphone-icon.png';
import Green from '../../../../public/images/bg-fon-green.png';
import White from '../../../../public/images/bg-fon-white.png';

export const DesctopDownload = () => {
	return (
		<div className='w-full border-t border-gray-300 relative h-[360px] w850:h-[330px] flex w650:flex-col w650:hidden'>
			<div className='bg-white w-full w650:hidden'></div>
			<div className='bg-[#4bb152] w-full rounded-bl-4xl w650:hidden'></div>
			<div className='absolute inset-0 flex justify-center items-center w650:relative w650:inset-auto'>
				<div className='w-full container h-[360px] w850:h-[330px] bg-transparent flex w650:flex-col w650:gap-3'>
					<div className='w-[65%] h-[360px] w850:h-[330px] flex flex-col gap-10 justify-center'>
						<div>
							<p className='h3 w850:h4'>
								Загрузите наше приложение,
								<br />
								чтобы <span className='text-warning'>отслеживать</span>
								<br />
								Ваши заказы
							</p>
						</div>
						<div className='flex gap-4'>
							<Link href={''}>
								<Image src={AppStore} alt='AppStore' />
							</Link>
							<Link href={''}>
								<Image src={GoogleMarket} alt='GoogleMarket' />
							</Link>
						</div>
					</div>
					<div className='bg-white w-full h-[360px] w850:h-[330px] relative'>
						<Image src={White} alt='white' className='w-auto h-[360px] w850:h-[330px] mx-auto' />
						<Image
							src={Green}
							alt='green'
							className='absolute w-[95%] top-0 right-[-5px] h-[360px] w850:h-[330px]'
						/>
						<Image
							src={Left}
							alt='left'
							className='h-fit absolute top-[90px] right-[300px] w850:w-[30px] w850:right-[240px] w850:top-[110px]'
						/>
						<Image
							src={Phone}
							alt='phone'
							className=' absolute top-14 w-[360px] right-3 w850:w-[280px] w850:top-[18]'
						/>
						<Image
							src={Right}
							alt='right'
							className='h-fit absolute bottom-16 right-4 w850:w-[70px]'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
