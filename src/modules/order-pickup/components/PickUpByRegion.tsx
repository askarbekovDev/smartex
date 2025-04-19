'use client';

import { YandexMap } from '@/components';
import React, { FC, useState } from 'react';
import { PickUpPointMenu } from './PickUpPointMenu';
import { regions } from '../bigRegionsData';

export const PickUpByRegion: FC = () => {
	const [menuData, setMenuData] = useState<string>('');
	const [center, setCenter] = useState<{ center: [number, number]; zoom: number }>({
		center: [42.875593, 74.592535],
		zoom: 12,
	});

	const coordinatesArr: [number, number][] = [];
	regions.map((coordinatesInReg) => {
		coordinatesInReg.pickUpPoints.map((coordinates) => {
			coordinatesArr.push([...coordinates.coordinates]);
		});
	});

	return (
		<section className='flex gap-6 w-full h-[650px] relative'>
			<div className='flex w-full h-full rounded-r-2xl overflow-hidden'>
				<div className='relative w-0 h-full'>
					<PickUpPointMenu menuData={menuData} setMenu={setMenuData} />
				</div>
				<YandexMap
					coordinatesArr={coordinatesArr}
					center={menuData ? [center.center[0], center.center[1] - 0.0067] : center.center}
					zoom={center.zoom}
				/>
			</div>
		</section>
	);
};
