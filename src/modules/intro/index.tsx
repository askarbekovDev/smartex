import Image from 'next/image';
import React, { FC } from 'react';
import { CornerSmoother } from '../../../public/icons';
import Link from 'next/link';
import { StatisticsWrapper } from '@/UI/StatisticsWrapper';

export const IntroSection: FC = () => {
	return (
		<section className='container'>
			<div className='w-full relative w850:hidden'>
				<div className='absolute top-[-1px] left-[-1px] max-w-[335px] h-[140px] w-full bg-background w1150:h-[106px]'>
					<div className='pl-px'>
						<h6 className='h6 pt-10 pb-3 text-secondary_text w1150:pt-6'>
							Сервис доставки посылок
						</h6>
						<h1 className='h1 text-secondary'>SMARTEX</h1>
					</div>
					<div className='absolute right-[-17px] top-px w-[17px] h-[17px]'>
						<CornerSmoother />
					</div>
					<div className='absolute right-[-17px] bottom-px w-[17px] h-[17px] rotate-270'>
						<CornerSmoother />
					</div>
					<div
						className='absolute flex items-center p-4 pl-px bg-background top-[139px] rounded-tr-2xl rounded-br-2xl gap-6
					w1150:gap-4 w1150:top-[105px]'
					>
						<StatisticsWrapper title='23' subTitle='Пункт выдачи' />
						<StatisticsWrapper title='100 000+' subTitle='Счастливых клиентов' />
						<StatisticsWrapper title='100 000+' subTitle='Успешных доставок' />
						<div className='absolute left-[1px] bottom-[-17px] w-[17px] h-[17px]'>
							<CornerSmoother />
						</div>
					</div>
				</div>
			</div>
			<div
				className='h-[600px] rounded-[15px] overflow-hidden flex items-center justify-center 
			w1150:h-[500px] w1050:h-[460px] w850:h-[236px] w450:mt-4 w370:h-[190px]'
			>
				<Image
					alt='The Ship'
					src='/images/intro-image.png'
					width={1140}
					height={600}
					className='h-full w-full object-cover'
				/>
			</div>
			<div className='w-full relative w850:hidden'>
				<div className='absolute bottom-[-1px] left-[-1px] pt-4 pr-4 pb-px pl-px bg-background rounded-tr-2xl'>
					<div className='absolute right-[-17px] bottom-px w-[17px] h-[17px] rotate-270'>
						<CornerSmoother />
					</div>
					<div className='absolute left-px top-[-17px] w-[17px] h-[17px] rotate-270'>
						<CornerSmoother />
					</div>
					<div className='p-2 border-1 border-border rounded-2xl bg-white'>
						<Image alt='The Alien' src='/images/alien-like.svg' width={88} height={91} />
					</div>
				</div>
				<div className='absolute right-[-1px] bottom-[-1px] pt-4 pl-4 pr-px pb-px rounded-tl-2xl bg-background'>
					<Link
						href='/'
						className='flex items-center justify-center w-[250px] h-15 rounded-2xl bg-success uiBtnText text-white 
						hover:bg-success_hover transition-all duration-200 w1150:w-[173px] w1150:rounded-[14px]'
					>
						Калькулятор
					</Link>
					<div className='absolute left-[-17px] bottom-px w-[17px] h-[17px] rotate-180'>
						<CornerSmoother />
					</div>
					<div className='absolute right-px top-[-17px] w-[17px] h-[17px] rotate-180'>
						<CornerSmoother />
					</div>
				</div>
			</div>

			<div className='hidden w850:block pt-4'>
				<div className='flex justify-between'>
					<div>
						<h6 className='bodyText text-[18px]! pb-3 text-primary_text w550:text-[16px]!'>
							Сервис доставки посылок
						</h6>
						<h1 className='h4 text-secondary text-[30px]! w550:text-[24px]!'>SMARTEX</h1>
					</div>
					<div className='p-2 border-1 border-border rounded-[60px] bg-white w-15 h-15 shrink-0'>
						<Image alt='The Alien' src='/images/alien-like.svg' width={47} height={56} />
					</div>
				</div>

				<div className='grid gap-4 grid-cols-2 pt-4 b-green-400 w550:gap-3 w420:grid-cols-1 w370:gap-2'>
					<StatisticsWrapper title='23' subTitle='Пункт выдачи' textCenter={true} wFull={true} />
					<StatisticsWrapper
						title='100 000+'
						subTitle='Счастливых клиентов'
						textCenter={true}
						wFull={true}
					/>
					<StatisticsWrapper
						title='100 000+'
						subTitle='Успешных доставок'
						textCenter={true}
						wFull={true}
					/>
					<Link
						href='/'
						className='flex items-center justify-center min-w-full h-[76px] rounded-2xl bg-success uiBtnText text-white hover:bg-success_hover
						transition-all duration-200 w1150:w-[173px] w1150:rounded-[10px] w550:h-16 w550:w-full w420:h-11 w420:rounded-lg'
					>
						Калькулятор
					</Link>
				</div>
			</div>
		</section>
	);
};
