'use client';

import { YandexMap } from '@/components/YandexMap';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { regions } from '../bigRegionsData';
import { OrderPickUpContentType } from '../types';
import { PointMenuMobile } from './index';

type FreeDeliveryProps = {
	content: OrderPickUpContentType;
};

export const FreeDeliveryBish: FC<FreeDeliveryProps> = ({ content }) => {
	const [menuData, setMenuData] = useState<string>('');
	const [center, setCenter] = useState<{ center: [number, number]; zoom: number }>({
		center: [42.865593, 74.582535],
		zoom: 13,
	});

	const coordinatesArr: [number, number][] = [];
	const bishkek = regions.filter((region) => region.region === 'Бишкек')[0];
	bishkek.pickUpPoints.map((coordinates) => {
		coordinatesArr.push([...coordinates.coordinates]);
	});

	return (
		<section className={clsx({ hidden: content !== 'Бесплатная доставка' })}>
			<div className='flex flex-col w-full h-[650px]'>
				<div className='w-full h-0 relative z-10'>
					{bishkek && (
						<div
							className={clsx(
								`absolute top-1 left-1 max-w-[280px] w-full h-fit bg-white transition-all duration-300 rounded-xl 
              shadow-xl border-1 border-border overflow-hidden`,
								{ 'opacity-0 pointer-events-none': menuData },
								{ 'opacity-100 pointer-events-auto': !menuData }
							)}
						>
							{bishkek.pickUpPoints.map((point, idx) => (
								<p
									onClick={() => {
										setMenuData(point.adress);
										setCenter({
											center: [point.coordinates[0], point.coordinates[1] + 0.002],
											zoom: 17,
										});
									}}
									key={idx}
									className='bodyLarge p-3 border-b-1 border-border
                     cursor-pointer hover:bg-white_hover last:border-b-0 truncate hover:bg-hover_white'
								>
									{point.adress}
								</p>
							))}
						</div>
					)}
					<div
						className={clsx('relative top-1 left-1 w-fit', { 'pointer-events-none': !menuData })}
					>
						<PointMenuMobile menuData={menuData} setMenu={setMenuData} />
					</div>
				</div>
				<div className='flex w-full h-full rounded-2xl overflow-hidden'>
					<YandexMap
						coordinatesArr={coordinatesArr}
						center={[center.center[0], center.center[1] - 0.003]}
						zoom={menuData ? 17 : center.zoom}
					/>
				</div>
			</div>
		</section>
	);
};
