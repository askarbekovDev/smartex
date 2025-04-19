'use client';

import { YandexMap } from '@/components';
import React, { FC, useState } from 'react';
import {
	ArrowDropDown,
	CloseIconTablet,
	TGisMapRef,
	WhatsAppIcon,
	YandexMapRef,
} from '../../../../public/icons';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

export const PickUpByRegion: FC = () => {
	type RegionsType = (typeof regions)[number]['region'];

	const [menuOpen, setMenuOpen] = useState<boolean>(true);
	const [menuData, setMenuData] = useState<string>('');
	const [regionSelect, setRegionSelect] = useState<RegionsType | null>(null);
	const [center, setCenter] = useState<{ center: [number, number]; zoom: number }>({
		center: [42.875593, 74.592535],
		zoom: 12,
	});

	const regions = [
		{
			region: 'Бишкек',
			regionCenter: [42.875969, 74.603701],
			pickUpPoints: [
				{ adress: 'ул. Московская 123', coordinates: [42.875593, 74.592535] },
				{ adress: 'пр. Чынгыза Айтматова 43', coordinates: [42.846284, 74.585663] },
			],
		},
		{
			region: 'Чуй',
			regionCenter: [42.875969, 74.603701],
			pickUpPoints: [
				{ adress: 'ул. Фрунзе 139', coordinates: [42.858287, 74.300717] },
				{ adress: 'ул. Осмонова 33', coordinates: [42.901427, 74.953622] },
			],
		},
		{
			region: 'Баткен',
			regionCenter: [40.060518, 70.819638],
			pickUpPoints: [
				{ adress: 'ул. Нургазыева 51', coordinates: [40.05434, 70.82863] },
				{ adress: 'ул. Турсунбай Сейдакматов 8', coordinates: [40.072376, 70.807034] },
			],
		},
		{
			region: 'Жалал - Абад',
			regionCenter: [40.938049, 72.993309],
			pickUpPoints: [
				{ adress: 'ул. Тоголок Молдо 79', coordinates: [40.943383, 72.989177] },
				{ adress: 'ул. Барпы-Cейил 282', coordinates: [40.929574, 73.011024] },
			],
		},
		{
			region: 'Иссык - Куль',
			regionCenter: [42.649982, 77.087725],
			pickUpPoints: [
				{ adress: 'ул. Аэропорт 5', coordinates: [42.64254, 77.064169] },
				{ adress: 'ул. Колесникова 2', coordinates: [42.652255, 77.097882] },
			],
		},
		{
			region: 'Нарын',
			regionCenter: [41.42833, 75.997635],
			pickUpPoints: [
				{ adress: 'ул. Ленина 104', coordinates: [41.427714, 75.98672] },
				{ adress: 'ул. Токтосуновой 24', coordinates: [41.427998, 75.999503] },
			],
		},
		{
			region: 'Ош',
			regionCenter: [40.517525, 72.80557],
			pickUpPoints: [
				{ adress: 'ул. Мамырова 114/2', coordinates: [40.512849, 72.792185] },
				{ adress: 'ул. Аскара Шакирова 40', coordinates: [40.514289, 72.818147] },
			],
		},
		{
			region: 'Талас',
			regionCenter: [42.520755, 72.250591],
			pickUpPoints: [
				{ adress: 'ул. Омурбекова 110Б', coordinates: [42.530476, 72.200735] },
				{ adress: 'ул. Асан Сатымкулов 47', coordinates: [42.511464, 72.278241] },
			],
		},
	] as const;

	const coordinatesArr: [number, number][] = [];
	regions.map((coordinatesInReg) => {
		coordinatesInReg.pickUpPoints.map((coordinates) => {
			coordinatesArr.push([...coordinates.coordinates]);
		});
	});

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
									onClick={() => {
										setCenter({
											center: [...region.regionCenter],
											zoom: region.region === 'Бишкек' ? 12 : region.region === 'Чуй' ? 10 : 13,
										});
										setRegionSelect((prev) =>
											prev === null || prev !== region.region ? region.region : null
										);
									}}
									className={clsx(
										`flex items-center justify-between w-full h-10 bodyLarge px-4 border-b-1 border-border 
                    cursor-pointer transition-all duration-100 hover:bg-white_hover`
									)}
								>
									{region.region}
									<div
										className={clsx(
											'transition-all duration-200',
											{ 'rotate-270': regionSelect !== region.region },
											{ 'rotate-360': regionSelect === region.region }
										)}
									>
										<ArrowDropDown />
									</div>
								</div>
								<div>
									{region.pickUpPoints.map((point, id) => (
										<div
											onClick={() => {
												setCenter({ center: [...point.coordinates], zoom: 15 });
												setMenuData(point.adress);
											}}
											key={id}
											className={clsx(
												`flex items-center w-full bodyLarge text-secondary_text px-4 border-b-1 border-border
                      transition-all duration-100 cursor-pointer hover:bg-white_hover`,
												{
													'h-0 opacity-0 pointer-events-none duration-300':
														regionSelect !== region.region,
												},
												{ 'h-10 pointer-events-auto duration-300': regionSelect === region.region }
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
				<div className='relative w-0 h-full'>
					<div className='absolute flex flex-col w-[320px] h-[518px] z-10 p-4 bg-white rounded-2xl'>
						<div className='flex items-center justify-between border-b-1 border-border pb-3'>
							<h6 className='h6'>Пункты выдачи</h6>
							<CloseIconTablet />
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
					</div>
				</div>
				<YandexMap coordinatesArr={coordinatesArr} center={center.center} zoom={center.zoom} />
			</div>
		</section>
	);
};
