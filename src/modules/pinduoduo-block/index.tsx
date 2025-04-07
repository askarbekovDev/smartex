import Image from 'next/image';
import React, { FC } from 'react';
import { CornerSmoother } from '../../../public/icons';
import Link from 'next/link';

export const PinduoduoBlock: FC = () => {
	return (
		<div className='container'>
			<div className='pt-[140px]'>
				<div className='w-full relative w850:hidden'>
					<div className='absolute p-4 pl-px top-[80px] left-[-1px] rounded-tr-2xl rounded-br-2xl bg-background'>
          <h1 className='h2 py-2.5 w1150:text-[28px]! w1150:py-1'>Блок для Пиндоудо</h1>

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
					<div className='absolute right-[-1px] bottom-[-1px] pt-4 pl-4 pr-px pb-px rounded-tl-2xl bg-background'>
						<Link
							href='#'
							className='flex items-center justify-center w-[250px] h-15 rounded-2xl bg-success uiBtnText text-white 
						w1150:w-[173px] w1150:rounded-[14px]'
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
