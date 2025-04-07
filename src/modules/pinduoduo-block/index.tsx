import Image from 'next/image';
import React, { FC } from 'react';
import { CornerSmoother } from '../../../public/icons';
import Link from 'next/link';

export const PinduoduoBlock: FC = () => {
	return (
		<div className='container'>
			<div className='pt-[140px]'>
        <h1 className='hidden  h4'>Блок для Пиндоудо</h1>
				<div className='w-full relative w650:hidden'>
					<div className='absolute p-4 pl-px top-[80px] left-[-1px] rounded-tr-2xl rounded-br-2xl 
                          bg-background w850:p-3 w750:top-[60px]'>
          <h1 className='h2 py-2.5 w1150:text-[28px]! w1150:py-1 w750:py-0'>Блок для Пиндоудо</h1>

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
			               w1150:h-[500px] w1050:h-[460px] w850:h-[420px] w750:h-[370px] w650:h-[260px] '
				>
					<Image
						alt='The Ship'
						src='/images/pinduoduo-image.png'
						width={1140}
						height={600}
						className='h-full w-full object-cover'
					/>
				</div>
				<div className='w-full relative'>
					<div className='absolute right-[-1px] bottom-[-1px] pt-4 pl-4 pr-px pb-px rounded-tl-2xl bg-background
          w650:translate-x-1/2 '>
						<Link
							href='#'
							className='flex items-center justify-center w-[250px] h-15 rounded-2xl bg-success uiBtnText text-white 
						w1150:w-[173px] w1150:rounded-[14px] w950:h-12.5'
						>
							Смотреть больше
						</Link>
						<div className='absolute left-[-17px] bottom-px w-[17px] h-[17px] rotate-180'>
							<CornerSmoother />
						</div>
						<div className='absolute right-px top-[-17px] w-[17px] h-[17px] rotate-180'>
							<CornerSmoother />
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};
