'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import App from '../../../public/icons/App store.svg';
import ArrowLeftIcon from '../../../public/icons/ArrowLeftIcon.svg';
import ArrowRightIcon from '../../../public/icons/ArrowRightIcon.svg';
import Call from '../../../public/icons/call.svg';
import CarIcon from '../../../public/icons/CarIcon.svg';
import Google from '../../../public/icons/Google.svg';
import IphoneIcon from '../../../public/icons/IphoneIcon.png';
import Location from '../../../public/icons/location.svg';
import Road from '../../../public/icons/road.svg';
import SmartexLogo from '../../../public/icons/SmartexLogo.svg';
import SmartexText from '../../../public/icons/SmartexText.svg';
import bgFonGreen from '../../../public/images/bgFonGreen.png';
import bgFonWhite from '../../../public/images/bgFonWhite.png';

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
					className='absolute bottom-2 left-0 w-full h-auto'
				>
					<Image src={CarIcon} alt='Car' className='drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]' />
				</motion.div>
			</div>

			<footer className='w-full border-t border-gray-300'>
				{/* App Download Section */}
				<div className='w-full bg-background'>
					<div className='mx-auto syima_container flex w750:flex-col w750:h-full w750:items-end h-[22.5rem]'>
						{/* Text Content */}
						<div className='w-[45%] w750:w-full flex flex-col justify-center items-start p-4 bg-white'>
							<div className='h3'>
								<p>
									Загрузите наше приложение, <br /> чтобы{' '}
									<span className='text-secondary'>отслеживать</span> <br /> Ваши заказы
								</p>
							</div>
							<div className='flex self-start gap-4 justify-center w-fit mt-10 w750:mt-2 w750:self-start'>
								<Image
									src={Google}
									alt='Google'
									className='cursor-pointer object-contain w-[160px] w850:w-[150px] w750:w-[140px] w550:w-[140px] w450:w-[120px] w370:w-[100px]'
								/>
								<Image
									src={App}
									alt='App'
									className='cursor-pointer object-contain w-[160px] w850:w-[150px] w750:w-[140px] w550:w-[140px] w450:w-[120px] w370:w-[100px]'
								/>
							</div>
						</div>

						{/* Background and Phone */}
						<div className='w-[55%] w750:w-full relative px-4 flex bg-white w750:h-[250px]'>
							<div className='absolute inset-0 left-[-1.625rem] w750:left-[-0.166rem]'>
								<Image src={bgFonWhite} alt='bgFonWhite' className='w-full h-full object-fill' />
							</div>
							<div className='absolute inset-0 z-20 right-0 w750:right-0 w750:left-[1rem]'>
								<Image src={bgFonGreen} alt='bgFonGreen' className='w-full h-full object-fill' />
							</div>
							<div className='absolute z-40 top-1/2 right-20 -translate-y-1/2 w750:right-4 w950:right-6 w450:right-5 w420:right-[20px] w370:right-[10px]'>
								<div className='absolute left-10 top-10 w450:top-14 w370:left-12'>
									<Image
										src={ArrowLeftIcon}
										alt='ArrowLeftIcon'
										className='w750:w-[30px] w450:w-[25px]'
									/>
								</div>
								<Image
									src={IphoneIcon}
									alt='IphoneIcon'
									className='w-[380px] w1100:w-[320px] object-contain'
								/>
								<div className='absolute right-10 bottom-12 w450:bottom-16'>
									<Image
										src={ArrowRightIcon}
										alt='ArrowRightIcon'
										className='w750:w-[70px] w450:w-[50px]'
									/>
								</div>
							</div>
						</div>
						{/*  */}
					</div>
				</div>

				{/* Contact Info */}
				<div className='w-full bg-primary flex  min-h-[250px] px-1 py-4 justify-center items-center'>
					<div className='syima_container px-4 flex flex-wrap w-full w750:flex-col justify-between gap-4'>
						{/* Logo */}
						<div className='flex flex-col gap-2 max-w-[300px]'>
							<Image src={SmartexText} alt='SmartexText' />
							<Image src={SmartexLogo} alt='SmartexLogo' />
						</div>

						{/* Navigation */}
						<div className='flex gap-8 flex-wrap'>
							<div>
								<p className='bodyLarge text-white mb-2'>Инструменты</p>
								<ul className='text-white space-y-1'>
									<li>Калькулятор/Тарифы</li>
									<li>Пункты выдачи</li>
									<li>Запрещенные товары</li>
									<li>Часто задаваемые вопросы</li>
								</ul>
							</div>
							<div>
								<p className='bodyLarge text-white mb-2'>О компании</p>
								<ul className='text-white space-y-1'>
									<li>О нас</li>
									<li>Новости и события</li>
									<li>Вакансии</li>
								</ul>
							</div>
							<div>
								<p className='bodyLarge text-white mb-2'>Контакты</p>
								<ul className='text-white space-y-1'>
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

				{/* sub_footer */}
				<div className='w-full bg-secondary py-4'>
					<div className='syima_container flex justify-between items-center px-4 w550:flex-col w550:gap-2 w550:text-center'>
						<p className='text-primary text-sm w550:text-base'>© 2024 All rights reserved.</p>
						<div className='flex gap-6 w550:flex-col w550:items-center'>
							<p className='text-primary text-sm cursor-pointer'>Terms of Service</p>
							<p className='text-primary text-sm cursor-pointer'>Privacy Policy</p>
							<p className='text-primary text-sm cursor-pointer'>Cookies</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
