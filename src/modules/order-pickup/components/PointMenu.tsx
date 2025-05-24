import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { CloseIconTablet, TGisMapRef, WhatsAppIcon, YandexMapRef } from '../../../../public/icons';

type PickMenuProps = {
	menuData: string;
	setMenu: React.Dispatch<React.SetStateAction<string>>;
};

export const PointMenu: FC<PickMenuProps> = ({ menuData, setMenu }) => {
	return (
		<section
			className={clsx(
				`flex flex-col w-[320px] h-[518px] p-4 bg-white rounded-2xl transition-all duration-500 shadow-xl w1150:w-[300px]
				w950:w-[270px] w850:w-[250px]`,
				{ 'opacity-100 pointer-events-auto': menuData },
				{ 'opacity-0 pointer-events-none': !menuData }
			)}
		>
			<div className='flex items-center justify-between border-b-1 border-border pb-3'>
				<h6 className='h6'>Пункты выдачи</h6>
				<div className='cursor-pointer' onClick={() => setMenu('')}>
					<CloseIconTablet />
				</div>
			</div>
			<div className='flex flex-col gap-3'>
				<p className='bodyBold pt-6'>{menuData}</p>
				<p className='supportBadge text-[13px]! text-secondary_text'>Режим работы</p>
				<p className='text-secondary_text'>
					<span className='bodyText'>Ежедневно: </span>
					<span className='bodyBold'>09:00- 18:00</span>
				</p>
				<p className='text-secondary_text'>
					<span className='bodyText'>Выходной день: </span>
					<span className='bodyBold'>Воскресенье</span>
				</p>
				<Link href='#' className='flex items-center'>
					<WhatsAppIcon />
					<span className='bodyBold pl-3'>996 0550 550 550</span>
				</Link>
			</div>
			<div className='w-full h-[196px] rounded-lg overflow-hidden my-6'>
				<Image
					alt='PickUp Point'
					src='/images/pickup-point-img.jpeg'
					width={288}
					height={196}
					className='h-full w-full object-cover'
				></Image>
			</div>
			<div className='flex items-center justify-between pt-2 border-t-1 border-border'>
				<Link href='#'>
					<YandexMapRef />
				</Link>
				<Link href='#'>
					<TGisMapRef />
				</Link>
			</div>
		</section>
	);
};
