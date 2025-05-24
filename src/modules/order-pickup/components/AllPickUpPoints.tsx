'use client';

import { YandexMap } from '@/components/YandexMap';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { regions } from '../bigRegionsData';
import { OrderPickUpContentType } from '../types';
import { PointMenu, RegionsMenu, RegionsMenuMobile } from './index';

type AllPickUpProps = {
	content: OrderPickUpContentType;
};

export const AllPickUpPoints: FC<AllPickUpProps> = ({ content }) => {
	const [menuData, setMenuData] = useState<string>('');
	const [center, setCenter] = useState<{ center: [number, number]; zoom: number }>({
		center: [42.875593, 74.582535],
		zoom: 12,
	});

	const coordinatesArr: [number, number][] = [];
	regions.map((coordinatesInReg) => {
		coordinatesInReg.pickUpPoints.map((coordinates) => {
			coordinatesArr.push([...coordinates.coordinates]);
		});
	});

	return (
		<section className={clsx({ hidden: content !== 'Пункты выдачи' })}>
			<div className='flex gap-6 w-full h-[650px] relative w750:flex-col'>
				<div className='hidden w750:block w-full h-12 relative'>
					<div className='absolute w-full z-10'>
						<RegionsMenuMobile setCenter={setCenter} setMenuData={setMenuData} isMenuOpen={false} />
					</div>
				</div>
				<div className='block w1050:hidden'>
					<RegionsMenu setCenter={setCenter} setMenuData={setMenuData} isMenuOpen={true} />
				</div>
				<div className='flex w-full h-full rounded-r-2xl overflow-hidden w1050:rounded-2xl'>
					<div className='relative w-0 h-full'>
						<div className='hidden w1050:block absolute z-10 left-1 top-1 w750:hidden'>
							<RegionsMenu setCenter={setCenter} setMenuData={setMenuData} isMenuOpen={false} />
						</div>
						<div
							className={clsx(
								'absolute z-10 w1050:left-84 w1050:top-1 w950:left-76.5 w850:left-71.5 w750:hidden',
								{ 'pointer-events-auto': menuData },
								{ 'pointer-events-none': !menuData }
							)}
						>
							<PointMenu menuData={menuData} setMenu={setMenuData} />
						</div>
					</div>
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
