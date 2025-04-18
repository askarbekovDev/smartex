'use client';

import { YandexMap } from '@/components';
import React, { FC, useState } from 'react';
import { ArrowDropDown } from '../../../../public/icons';
import clsx from 'clsx';

export const PickUpByRegion: FC = () => {
	const [pickUpRegion, setPickUpRegion] = useState<RegionsType | null>(null);
	const [menuOpen, setMenuOpen] = useState<boolean>(true);
	const [mapPinLocate, setMapPinLocate] = useState<[number, number]>([42.875593, 74.592535]);
	const [zoom, setZoom] = useState<number>(12);
	type RegionsType = (typeof regions)[number]['region'];

	const regions = [
		{
			region: 'Бишкек',
			pickUpPoints: [
				{ adress: 'ул. Московская 123', coordinates: [42.875593, 74.592535] },
				{ adress: 'пр. Чынгыза Айтматова, 43', coordinates: [42.846284, 74.585663] },
			],
		},
		{
			region: 'Баткен',
			pickUpPoints: [
				{ adress: 'ул. Московская 123', coordinates: [42.875593, 74.592535] },
				{ adress: 'пр. Чынгыза Айтматова, 43', coordinates: [42.846284, 74.585663] },
			],
		},
		{
			region: 'Жалал - Абад',
			pickUpPoints: [
				{ adress: 'ул. Московская 123', coordinates: [42.875593, 74.592535] },
				{ adress: 'пр. Чынгыза Айтматова, 43', coordinates: [42.846284, 74.585663] },
			],
		},
		{
			region: 'Иссык - Куль',
			pickUpPoints: [
				{ adress: 'ул. Московская 123', coordinates: [42.875593, 74.592535] },
				{ adress: 'пр. Чынгыза Айтматова, 43', coordinates: [42.846284, 74.585663] },
			],
		},
		{
			region: 'Нарын',
			pickUpPoints: [
				{ adress: 'ул. Московская 123', coordinates: [42.875593, 74.592535] },
				{ adress: 'пр. Чынгыза Айтматова, 43', coordinates: [42.846284, 74.585663] },
			],
		},
		{
			region: 'Ош',
			pickUpPoints: [
				{ adress: 'ул. Московская 123', coordinates: [42.875593, 74.592535] },
				{ adress: 'пр. Чынгыза Айтматова, 43', coordinates: [42.846284, 74.585663] },
			],
		},
		{
			region: 'Талас',
			pickUpPoints: [
				{ adress: 'ул. Московская 123', coordinates: [42.875593, 74.592535] },
				{ adress: 'пр. Чынгыза Айтматова, 43', coordinates: [42.846284, 74.585663] },
			],
		},
		{
			region: 'Чуй',
			pickUpPoints: [
				{ adress: 'ул. Московская 123', coordinates: [42.875593, 74.592535] },
				{ adress: 'пр. Чынгыза Айтматова, 43', coordinates: [42.846284, 74.585663] },
			],
		},
		{
			region: 'Образец',
			pickUpPoints: [
				{ adress: 'ул. Московская 123', coordinates: [42.875593, 74.592535] },
				{ adress: 'пр. Чынгыза Айтматова, 43', coordinates: [42.846284, 74.585663] },
			],
		},
	] as const;

	return (
		<section className='flex gap-6 w-full h-[650px] relative'>
			<section className='h-full w-[350px] p-4 shrink-0 overflow-hidden bg-white rounded-l-2xl'>
				<div className='cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
					<div className='flex w-full h-10'>
						<div className='flex items-center pl-4 w-full h-full bg-primary rounded-tl-lg bodyLarge text-white'>
							Пункты выдачи по областям
						</div>
						<div className='flex items-center justify-center  w-10 h-full border-[0.5px] border-primary rounded-tr-lg'>
							<div className={clsx('transition-all duration-300', { 'rotate-180': menuOpen })}>
								<ArrowDropDown />
							</div>
						</div>
					</div>
				</div>
				<div
					className={clsx(
						'overflow-y-scroll transition-all duration-300',
						{ 'h-full pb-10 pointer-events-auto': menuOpen },
						{ 'opacity-0 -translate-y-20 pointer-events-none': !menuOpen }
					)}
				>
					<div className={clsx('w-full pt-3')}>
						{regions.map((region, idx) => (
							<div key={idx}>
								<div
									onClick={() =>
										setPickUpRegion((prev) =>
											prev === null || prev !== region.region ? region.region : null
										)
									}
									className='flex items-center justify-between w-full h-10 bodyLarge px-4 
                  border-b-1 border-border cursor-pointer transition-all duration-100 hover:text-secondary'
								>
									{region.region}
									<div
										className={clsx(
											'transition-all duration-200',
											{ 'rotate-270': pickUpRegion !== region.region },
											{ 'rotate-360': pickUpRegion === region.region }
										)}
									>
										<ArrowDropDown />
									</div>
								</div>
								<div>
									{region.pickUpPoints.map((point, id) => (
										<div
											onClick={() => {
												setMapPinLocate([...point.coordinates]);
												setZoom(15);
											}}
											key={id}
											className={clsx(
												`flex items-center w-full bodyLarge text-secondary_text px-4 border-b-1 border-border
                      transition-all duration-100 cursor-pointer hover:text-secondary`,
												{
													'h-0 opacity-0 pointer-events-none duration-300':
														pickUpRegion !== region.region,
												},
												{ 'h-10 pointer-events-auto duration-300': pickUpRegion === region.region }
											)}
										>
											{point.adress}
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<div className='flex w-full h-full rounded-r-2xl overflow-hidden'>
				<YandexMap
					coordinatesArr={[
						[42.846284, 74.585663],
						[42.875593, 74.592535],
					]}
					center={mapPinLocate}
          zoom={zoom}
				/>
			</div>
		</section>
	);
};
