// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import App from '../../../public/icons/App store.svg';
// import Call from '../../../public/icons/call.svg';
// import CarIcon from '../../../public/icons/CarIcon.svg';
// import Google from '../../../public/icons/Google.svg';
// import Location from '../../../public/icons/location.svg';
// import Road from '../../../public/icons/road.svg';
// import SmartexLogo from '../../../public/icons/SmartexLogo.svg';
// import SmartexText from '../../../public/icons/SmartexText.svg';
// import Download from '../../../public/images/Download.png';
// export const Footer = () => {
// 	return (
// 		<>
// 			{/* Animated Road */}
// 			<div className='relative w-full mx-auto h-[100px] bg-primary rounded-t-[1rem] overflow-hidden'>
// 				<Image
// 					src={Road}
// 					alt='Road'
// 					className='w-full h-full pointer-events-none'
// 					draggable={false}
// 					priority
// 				/>
// 				<motion.div
// 					initial={{ x: '-100%' }}
// 					animate={{ x: '100%' }}
// 					transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
// 					className='absolute bottom-2 left-0 w-full h-auto'
// 				>
// 					<Image src={CarIcon} alt='Car' className='drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]' />
// 				</motion.div>
// 			</div>

// 			<footer className='w-full border-t  border-gray-300'>
// 				{/* App Download Section */}
// 				<div className='container flex w750:flex-col w750:h-full w750:items-end h-[22.5rem]'>
// 					{/* Text Content */}
// 					<div className=' w750:w-full flex flex-col justify-center items-start p-4 bg-white'>
// 						<div className='h3'>
// 							<p>
// 								Загрузите наше приложение, <br /> чтобы{' '}
// 								<span className='text-secondary'>отслеживать</span> <br /> Ваши заказы
// 							</p>
// 						</div>
// 						<div className='flex self-start gap-4 justify-center w-fit mt-10 w750:mt-2 w750:self-start'>
// 							<Image
// 								src={Google}
// 								alt='Google'
// 								className='cursor-pointer object-contain w-[160px] w850:w-[150px] w750:w-[140px] w550:w-[140px] w450:w-[120px] w370:w-[100px]'
// 							/>
// 							<Image
// 								src={App}
// 								alt='App'
// 								className='cursor-pointer object-contain w-[160px] w850:w-[150px] w750:w-[140px] w550:w-[140px] w450:w-[120px] w370:w-[100px]'
// 							/>
// 						</div>
// 					</div>

// 					{/* Background and Phone */}
// 					<div className='bg-white w-full h-full'>
// 						<Image src={Download} alt='Download' className='w-full h-full' />
// 					</div>
// 				</div>

// 				{/* Contact Info */}
// 			</footer>
// 			<div className='w-full  bg-primary py-4 '>
// 				<div className=' flex container  min-h-[250px] px-1 py-4 justify-center items-center'>
// 					<div className=' px-4 flex flex-wrap w-full w750:flex-col justify-between gap-4'>
// 						{/* Logo */}
// 						<div className='flex flex-col gap-2 max-w-[300px]'>
// 							<Image src={SmartexText} alt='SmartexText' />
// 							<Image src={SmartexLogo} alt='SmartexLogo' />
// 						</div>

// 						{/* Navigation */}
// 						<div className='flex gap-8 flex-wrap'>
// 							<div>
// 								<p className='bodyLarge text-white mb-2'>Инструменты</p>
// 								<ul className='text-white space-y-1'>
// 									<li>Калькулятор/Тарифы</li>
// 									<li>Пункты выдачи</li>
// 									<li>Запрещенные товары</li>
// 									<li>Часто задаваемые вопросы</li>
// 								</ul>
// 							</div>
// 							<div>
// 								<p className='bodyLarge text-white mb-2'>О компании</p>
// 								<ul className='text-white space-y-1'>
// 									<li>О нас</li>
// 									<li>Новости и события</li>
// 									<li>Вакансии</li>
// 								</ul>
// 							</div>
// 							<div>
// 								<p className='bodyLarge text-white mb-2'>Контакты</p>
// 								<ul className='text-white space-y-1'>
// 									<li className='flex items-center gap-2'>
// 										<Image src={Call} alt='call' /> 0550 550 550
// 									</li>
// 									<li className='flex items-center gap-2'>
// 										<Image src={Call} alt='call' /> 0550 550 550
// 									</li>
// 									<li className='flex items-center gap-2'>
// 										<Image src={Call} alt='call' /> 0550 550 550
// 									</li>
// 									<li className='flex items-center gap-2'>
// 										<Image src={Location} alt='Location' /> г. Бишкек, ул. Шопокова 123
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			{/* sub_footer */}
// 			<div className='w-full bg-secondary flex items-center py-4'>
// 				<div className='container py-4 '>
// 					<div className=' flex justify-between items-center px-4 w550:flex-col w550:gap-2 w550:text-center'>
// 						<p className='text-primary text-sm w550:text-base'>© 2024 All rights reserved.</p>
// 						<div className='flex gap-6 w550:flex-col w550:items-center'>
// 							<p className='text-primary text-sm cursor-pointer'>Terms of Service</p>
// 							<p className='text-primary text-sm cursor-pointer'>Privacy Policy</p>
// 							<p className='text-primary text-sm cursor-pointer'>Cookies</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AppStore from '../../../public/icons/App store.svg';
import Left from '../../../public/icons/ArrowLeftIcon.svg';
import Right from '../../../public/icons/ArrowRightIcon.svg';
import CarIcon from '../../../public/icons/CarIcon.svg';
import GoogleMarket from '../../../public/icons/Google.svg';
import Phone from '../../../public/icons/IphoneIcon.png';
import Road from '../../../public/icons/road.svg';
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
				<div className='flex flex-col container gap-4 '>
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
				<div className='bg-white relative w-full h-[360px] w850:h-[330px]  w650:h-[250px]'>
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
			<div className='w-full bg-secondary flex items-center py-6  w650:mt-[68px] w420:mt-[68px]'>
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
