import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import AirPlane from '../../../../public/images/air-plane.png';
import Line from '../../../../public/images/line.png';

export const AnimationRoad = () => {
	return (
		<div className='relative overflow-x-hidden h-[120px]'>
			<div className='absolute bottom-0 w-full h-[100px] overflow-hidden'>
				<Image
					src={Line}
					alt='Road'
					className='absolute w-full h-full left-1/2 -translate-y-1/2 top-1/2 transform -translate-x-1/2 pointer-events-none'
					draggable={false}
				/>
			</div>

			<motion.div
				initial={{ x: '-10%' }}
				animate={{ x: '100%' }}
				transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
				className='absolute top-1/2 transform -translate-y-1/2 left-0 w-full z-10 pointer-events-none'
			>
				<Image
					src={AirPlane}
					alt='Car'
					width={250}
					height={150}
					className='drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[340px] w550:w-[250px]'
				/>
			</motion.div>
		</div>
	);
};
