import Image from 'next/image';
import React, { FC } from 'react';
import { CornerSmoother } from '../../../public/icons';
import { StatisticsWrapper } from '@/UI';

export const IntroBlock: FC = () => {
	return (
		<div className='container'>
			<div className='w-full relative'>
				<div className='absolute top-[-1px] left-[-1px] max-w-[335px] h-[140px] w-full bg-background'>
					<div className='pl-px'>
						<h6 className='h6 pt-10 pb-3 text-secondary-text'>Сервис доставки посылок</h6>
						<h1 className='h1 text-secondary'>SMARTEX</h1>
					</div>
					<div className='absolute right-[-17px] top-px w-[17px] h-[17px]'>
						<CornerSmoother />
					</div>
					<div className='absolute right-[-17px] bottom-px w-[17px] h-[17px] rotate-270'>
						<CornerSmoother />
					</div>
					<div className='absolute flex items-center p-4 pl-px bg-background top-[139px] rounded-tr-2xl rounded-br-2xl gap-6'>
						<StatisticsWrapper title='23' subTitle='Пункт выдачи' />
						<StatisticsWrapper title='100 000+' subTitle='Счастливых клиентов' />
						<StatisticsWrapper title='100 000+' subTitle='Успешных доставок' />
						<div className='absolute left-[1px] bottom-[-17px] w-[17px] h-[17px]'>
							<CornerSmoother />
						</div>
					</div>
				</div>
			</div>
			<div className='h-[600px] w850:h-[400px] rounded-[15px] overflow-hidden flex items-center justify-center'>
				<Image
					alt='The Ship'
					src='/images/intro-image.png'
					width={1140}
					height={600}
					className='h-full w-full object-cover'
				/>
			</div>
			<div className='w-full relative'>
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
			</div>
		</div>
	);
};
