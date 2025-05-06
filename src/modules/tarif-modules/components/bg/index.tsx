import { StatisticsWrapper } from '@/UI';
import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';
import { CornerSmoother } from '../../../../../public/icons';

export const IntroBlockTarif: FC = () => {
	return (
		<div className=''>
			<div className='w-full relative w850:hidden'>
				<div className='absolute left-0 top-[152px] bottom-px w-[17px] h-[17px] rotate-270'>
					<CornerSmoother />
				</div>
				<div
					className='absolute flex flex-col p-4 pl-px bg-background top-[169px] rounded-tr-2xl rounded-br-2xl gap-6
          w1150:gap-4 w1150:top-[105px]'
				>
					<p className='h3'>Прозрачные тарифы</p>
					<div className={clsx('flex gap-4')}>
						<StatisticsWrapper title='100+' subTitle='Новых клиентов ' />
						<StatisticsWrapper title='50+' subTitle='Публикаций ' />
					</div>
					<div className='absolute left-0 bottom-[-17px] w-[17px] h-[17px]'>
						<CornerSmoother />
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
			</div>
			{/*  */}
			<div className='hidden w850:block pt-4'>
				<div className='flex justify-between'>
					<div>
						<h6 className='text-[30px] font-bold pb-3 text-primary-text w550:text-[px]'>
							Прозрачные тарифы
						</h6>
					</div>
					<div className='p-2 border-1 border-border rounded-[60px] bg-white w-15 h-15'>
						<Image alt='The Alien' src='/images/alien-like.svg' width={47} height={56} />
					</div>
				</div>

				<div className='grid gap-4 grid-cols-2 pt-4 b-green-400 w550:gap-3 w420:grid-cols-1 w370:gap-2'>
					<StatisticsWrapper
						title='100+'
						subTitle='Новых клиентов'
						textCenter={true}
						wFull={true}
					/>
					<StatisticsWrapper title='50+' subTitle='Публикаций' textCenter={true} wFull={true} />
				</div>
			</div>
		</div>
	);
};
