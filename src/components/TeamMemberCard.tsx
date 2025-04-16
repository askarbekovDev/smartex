import Image from 'next/image';
import React, { FC } from 'react';

type TeamMemberProps = {
	image: string;
	fullname: string;
	position: string;
};

export const TeamMemberCard: FC<TeamMemberProps> = ({ fullname, position, image }) => {
	return (
		<div className='flex flex-col max-w-[364px] w-full h-[480px] border border-border rounded-2xl overflow-hidden
		w850:h-[460px] w750:h-[410px] w650:h-[380px] w550:h-[460px]'>
			<div className='w-full h-full'>
				<Image
					className='w-full h-full object-cover'
					alt='team member'
					src={image}
					width={364}
					height={382}
				/>
			</div>
			<div className='flex flex-col justify-evenly w-full h-[98px] bg-primary px-5'>
				<p className='h5 text-white'>{fullname}</p>
				<p className='bodySmall text-secondary'>{position}</p>
			</div>
		</div>
	);
};
