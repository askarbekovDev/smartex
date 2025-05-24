import { StatisticsWrapper } from '@/UI';
import Image from 'next/image';
import { CornerSmoother } from '../../../public/icons';

export const NewsIntro = () => {
	return (
		<div className='container'>
			<div>
				<div className='w-full relative w850:hidden'>
					<div className='absolute p-4 pl-px top-[80px] left-[-1px] rounded-tr-2xl rounded-br-2xl bg-background'>
						<h1 className='h2 pt-1 pb-6 w1150:text-[28px]! w1150:pb-3 w1150:pt-0'>
							Новости и обновления Smartex
						</h1>
						<div className='flex items-center gap-6 w1150:gap-4 w1150:top-[105px]'>
							<StatisticsWrapper title='100+' subTitle='Новых клиентов в месяц' />
							<StatisticsWrapper title='50+' subTitle='Публикаций о Smartex' />
							<StatisticsWrapper title='3+' subTitle='Новые услуги за этот год' />
							<StatisticsWrapper title='98%' subTitle='Отзывов' />
						</div>
						<div className='absolute left-px top-[-17px] w-[17px] h-[17px] rotate-270'>
							<CornerSmoother />
						</div>
						<div className='absolute left-[1px] bottom-[-17px] w-[17px] h-[17px]'>
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
						src='/images/pinduoduo-image.png'
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

				<div className='hidden w850:block pt-4'>
					<div className='flex justify-between items-center'>
						<h4 className='sectionTitle w450:text-[20px]! text-primary_text'>
							Новости и обновления Smartex
						</h4>
						<div className='p-2 border-1 border-border rounded-[60px] bg-white w-15 h-15 shrink-0'>
							<Image alt='The Alien' src='/images/alien-like.svg' width={47} height={56} />
						</div>
					</div>

					<div className='grid gap-4 grid-cols-2 pt-4 b-green-400 w550:gap-3 w420:grid-cols-1 w370:gap-2'>
						<StatisticsWrapper
							title='100+'
							subTitle='Новых клиентов в месяц'
							textCenter={true}
							wFull={true}
						/>
						<StatisticsWrapper
							title='50+'
							subTitle='Публикаций о Smartex'
							textCenter={true}
							wFull={true}
						/>
						<StatisticsWrapper
							title='3+'
							subTitle='Новые услуги за этот год'
							textCenter={true}
							wFull={true}
						/>
						<StatisticsWrapper title='98+' subTitle='Отзывов' textCenter={true} wFull={true} />
					</div>
					<div className='hidden w850:block mt-4'>
						<StatisticsWrapper
							title='3'
							subTitle='Новые услуги за этот год'
							textCenter={true}
							wFull={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
