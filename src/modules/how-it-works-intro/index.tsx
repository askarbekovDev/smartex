import { StatisticsWrapper } from '@/UI/StatisticsWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { CornerSmoother, PlayIcon } from '../../../public/icons';

export const HowItWorksIntro = () => {
	return (
		<div className='container'>
			<div className='w-full relative w850:hidden'>
				<div className='absolute p-4 pl-px top-[80px] left-[-1px] rounded-tr-2xl rounded-br-2xl bg-background'>
					<h1 className='h2 pt-1 pb-6 w1150:text-[28px]! w1150:pb-3 w1150:pt-0'>Как мы работаем</h1>
					<div className='flex items-center gap-6 w1150:gap-4 w1150:top-[105px]'>
						<StatisticsWrapper title='3 дня' subTitle='Минимальный срок доставки' />
						<StatisticsWrapper title='90%' subTitle='Быстрая доставка' />
						<StatisticsWrapper title='24/7' subTitle='Поддержка клиентов' />
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
				<div className='absolute right-[-1px] bottom-[-1px] pt-4 pl-4 pr-px pb-px rounded-tl-2xl bg-background'>
					<Link
						href='/'
						className='flex items-center justify-center w-[250px] h-15 rounded-2xl bg-success uiBtnText text-white 
						w1150:w-[173px] w1150:rounded-[14px]'
					>
						<span className='pr-5 w1150:pr-3'>Смотреть</span> <PlayIcon />
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
				<div className='flex justify-between items-center gap-2'>
					<h4 className='sectionTitle text-primary-text'>Как мы работаем</h4>
					<div className='p-2 border-1 border-border rounded-[60px] bg-white w-15 h-15'>
						<Image alt='The Alien' src='/images/alien-like.svg' width={47} height={56} />
					</div>
				</div>

				<div className='grid gap-4 grid-cols-2 pt-4 b-green-400 w550:gap-3 w420:grid-cols-1 w370:gap-2'>
					<StatisticsWrapper
						title='3 дня'
						subTitle='Минимальный срок доставки'
						textCenter={true}
						wFull={true}
					/>
					<StatisticsWrapper
						title='90%'
						subTitle='Быстрая доставка'
						textCenter={true}
						wFull={true}
					/>
				</div>
				<div className='flex flex-col gap-4 pt-4 w550:gap-3 w550:pt-3'>
					<StatisticsWrapper
						title='24/7'
						subTitle='Поддержка клиентов'
						textCenter={true}
						wFull={true}
					/>
					<Link
						href='/'
						className='flex items-center justify-center min-w-full h-[72px] rounded-2xl bg-success uiBtnText text-white 
						w1150:w-[173px] w1150:rounded-[10px] w550:h-17 w550:w-full w420:h-16 w420:rounded-lg'
					>
						<div className='flex flex-col items-center'>
							<PlayIcon />
							<span>Смотреть</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
