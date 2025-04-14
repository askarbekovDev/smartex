'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AppStore from '../../../public/icons/app-store.svg';
import Left from '../../../public/icons/arrow-left-icon.svg';
import Right from '../../../public/icons/arrow-right-icon.svg';
import Call from '../../../public/icons/call.svg';
import CarIcon from '../../../public/icons/car-icon.svg';
import GoogleMarket from '../../../public/icons/google.svg';
import Phone from '../../../public/icons/iphone-icon.png';
import Location from '../../../public/icons/location.svg';
import Road from '../../../public/icons/road.svg';
import SmartexLogo from '../../../public/icons/smartex-logo.svg';
import SmartexText from '../../../public/icons/smartex-text.svg';
import Green from '../../../public/images/bg-fon-green.png';
import White from '../../../public/images/bg-fon-white.png';

export const Footer = () => {
	return (
		<>
			{/* Animated Road */}
			<div className='relative w-full mx-auto h-[100px] bg-primary rounded-t-[1rem] overflow-hidden'>
				<Image
					src={Road}
					alt='Road'
					className='w-full h-full pointer-events-none'
					draggable={false}
					priority
				/>
				<motion.div
					initial={{ x: '-100%' }}
					animate={{ x: '100%' }}
					transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
					className='absolute bottom-2 z-[999999] inset-0 left-0 w-full h-auto'
				>
					<Image src={CarIcon} alt='Car' className='drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]' />
				</motion.div>
			</div>

			<footer className='w-full border-t border-gray-300 relative h-[360px] w850:h-[330px] flex w650:flex-col w650:hidden'>
				<div className='bg-white w-full w650:hidden'></div>
				<div className='bg-[#4bb152] w-full rounded-bl-4xl w650:hidden'></div>
				<div className='absolute inset-0 flex justify-center items-center w650:relative w650:inset-auto'>
					<div className='w-full container h-[360px] w850:h-[330px] bg-transparent flex w650:flex-col w650:gap-3'>
						{/*  */}
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
						{/*  */}
						<div className='bg-white w-full h-[360px] w850:h-[330px] relative'>
							<Image src={White} alt='white' className='w-full h-[360px] w850:h-[330px]' />
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
						{/*  */}
					</div>
				</div>
			</footer>
			{/*  */}
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
					<Image
						src={White}
						alt='white'
						className='w-full h-[360px] w850:h-[330px] w650:h-[250px]'
					/>
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
				{/*  */}
			</div>
			{/*  */}
			<div className='w-full w650:mt-20  w370:mt-24 bg-primary py-6 '>
				<div className=' flex container min-h-[250px] px-1 py-4 justify-center items-center'>
					<div className='px-4 flex flex-wrap w-full w750:flex-col justify-between gap-4'>
						{/* Logo */}
						<div className='flex flex-col gap-2 max-w-[300px] w420:pt-4'>
							<Image src={SmartexText} alt='SmartexText' />
							<Image src={SmartexLogo} alt='SmartexLogo' />
						</div>
						{/* Navigation */}
						<div className='flex gap-8 flex-wrap'>
							<div>
								<p className='h6 text-white mb-2'>Инструменты</p>
								<ul className='text-white space-y-1'>
									<li>Калькулятор/Тарифы</li>
									<li>Пункты выдачи</li>
									<li>Запрещенные товары</li>
									<li>Часто задаваемые вопросы</li>
								</ul>
							</div>
							<div>
								<p className='h6 text-white mb-2'>О компании</p>
								<ul className='text-white space-y-1'>
									<li>О нас</li>
									<li>Новости и события</li>
									<li>Вакансии</li>
								</ul>
							</div>
							<div>
								<p className='h6 text-white mb-2'>Контакты</p>
								<ul className='text-white space-y-1 '>
									<li className='flex items-center gap-2'>
										<Image src={Call} alt='call' /> 0550 550 550
									</li>
									<li className='flex items-center gap-2'>
										<Image src={Call} alt='call' /> 0550 550 550
									</li>
									<li className='flex items-center gap-2'>
										<Image src={Call} alt='call' /> 0550 550 550
									</li>
									<li className='flex items-center gap-2'>
										<Image src={Location} alt='Location' /> г. Бишкек, ул. Шопокова 123
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*  */}
			<div className='w-full bg-secondary flex items-center py-4'>
				<div className='container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center text-primary text-sm gap-2'>
					<p>© 2024 All rights reserved.</p>
					<div className='flex gap-6'>
						<p className='cursor-pointer'>Terms of Service</p>
						<p className='cursor-pointer'>Privacy Policy</p>
						<p className='cursor-pointer'>Cookies</p>
					</div>
				</div>
			</div>
		</>
	);
};
