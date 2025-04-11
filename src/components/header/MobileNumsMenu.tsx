import Link from 'next/link';
import React, { FC } from 'react';
import { PhoneIcon, PhoneIconBlack } from '../../../public/icons';
import { headerContactPhoneNums } from '@/utils/constants';

export const MobileNumsMenu: FC = () => {
	return (
		<div className='flex items-center h-full relative group w450:py-2'>
			<Link href='#' className='flex items-center h-full uiNavLink gap-2 text-white'>
				<PhoneIcon />
				<span className='w450:text-[13px]'>Связаться с нами</span>
			</Link>
			<div
				className='absolute left-[-15%] pointer-events-none top-[39px] bg-white shadow-xl rounded-b-2xl opacity-0 translate-y-[-10px] z-50
            transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 px-4 py-[10px]
						w450:top-[79px] w450:left-[-16px]'
			>
				{headerContactPhoneNums.map((phoneNum, idx) => (
					<div
						key={idx}
						className='flex items-center py-2 pr-5 border-b-[1px] border-b-border last:border-0'
					>
						<Link
							className='flex items-center whitespace-nowrap bodyText hover:text-secondary gap-3'
							href={phoneNum.href}
						>
							<PhoneIconBlack />
							<span>{phoneNum.title}</span>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};
