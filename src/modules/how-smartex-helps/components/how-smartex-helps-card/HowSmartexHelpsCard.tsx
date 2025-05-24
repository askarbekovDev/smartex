import Image from 'next/image';
import { HowSmartexHelpsCardProps } from '../..';

export const HowSmartexHelpsCard = ({ el, index }: HowSmartexHelpsCardProps) => {
	return (
		<div className='w-full flex flex-col h-full'>
			<div className='relative w-full h-[267px] w1050:h-[450px] w850:h-[348px] w650:h-[500px] w450:h-[358px]'>
				<Image
					src={el.image}
					alt='smartex-our-work-alien'
					fill
					sizes='(max-width: 768px) 100vw, 50vw'
					className='object-cover'
				/>
				<div className='absolute h-[100px] w1050:h-[150px] w850:h-[120px] w650:h-[148px] w450:h-[120px] border-[1px] border-border border-dashed -bottom-[90px] w1050:-bottom-[123px] w850:-bottom-[102px] w650:-bottom-[110px] left-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2'></div>
				<div className='absolute flex justify-center items-center w-[65px] h-[33px] rounded-[90px] font-roboto text-[12px] text-primary font-normal leading-[140%] bg-white border-[2px] border-success -bottom-[90px] w650:-bottom-[85px] left-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2 z-10'>
					Шаг {index + 1}
				</div>
				<div className='absolute w-full w1050:w-full border-[1px] border-border border-dashed -bottom-[60px] w650:-bottom-[55px] left-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2'></div>
			</div>
			<div className='w-full flex flex-col flex-1 min-h-[118px] mt-[113px] w1050:mt-[81px] border-border border-[1px] rounded-[16px] text-center px-5 py-6'>
				<h6 className='h6 text-primary_text w650:text-secondary'>{el.title}</h6>
				<p className='bodyText text-secondary_text mt-3 flex-grow'>{el.description}</p>{' '}
			</div>
		</div>
	);
};
