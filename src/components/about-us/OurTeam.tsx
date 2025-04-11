import { Pagination } from '@/UI';
import clsx from 'clsx';
import Image from 'next/image';
import React, { FC } from 'react';
import { CornerSmoother } from '../../../public/icons';

type OurTeamProps = {
	content: Content;
};

export const OurTeam: FC<OurTeamProps> = ({ content }) => {
	return (
		<div className={clsx({ hidden: content !== 'Наша команда' })}>
			<div
				className='h-[700px] rounded-[15px] overflow-hidden flex items-center justify-center w1050:h-[550px] w950:h-[500px] 
              w850:h-[440px] w750:h-[380px] w650:h-[330px] w550:h-[290px] w450:h-[260px] w370:h-[240px]'
			>
				<Image
					alt='Our team'
					src='/images/our-team.jpeg'
					width={1140}
					height={600}
					className='h-full w-full object-cover'
				/>
			</div>
			<div className='w-full relative'>
				<div
					className='absolute w-fit right-[-1px] bottom-[-1px] pt-4 px-4 pb-px rounded-t-[40px] bg-background
                left-1/2 -translate-x-1/2 w950:rounded-t-4xl w950:pt-3 w750:pt-2'
				>
					<Pagination />
					<div className='absolute left-[-17px] bottom-px w-[17px] h-[17px] rotate-180'>
						<CornerSmoother />
					</div>
					<div className='absolute bottom-px right-[-17px] w-[17px] h-[17px] rotate-270'>
						<CornerSmoother />
					</div>
				</div>
			</div>
		</div>
	);
};
