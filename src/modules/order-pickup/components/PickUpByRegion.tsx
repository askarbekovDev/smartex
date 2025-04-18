'use client';

import { YandexMap } from '@/components';
import React, { FC, useState } from 'react';
import { ArrowDropDown } from '../../../../public/icons';
import clsx from 'clsx';

export const PickUpByRegion: FC = () => {
	const [pickUpRegion, setPickUpRegion] = useState<RegionsType | null>(null);
	const [menuOpen, setMenuOpen] = useState<boolean>(true);

	type RegionsType = (typeof regions)[number]['region'];

	const regions = [
		{ region: 'Бишкек', pickUpPoints: ['Ул. Московская 123', 'Ул. Киевская 123'] },
		{ region: 'Баткен', pickUpPoints: ['Ул. Московская 123', 'Ул. Киевская 123'] },
		{ region: 'Жалал - Абад', pickUpPoints: ['Ул. Московская 123', 'Ул. Киевская 123'] },
		{ region: 'Иссык - Куль', pickUpPoints: ['Ул. Московская 123', 'Ул. Киевская 123'] },
		{ region: 'Нарын', pickUpPoints: ['Ул. Московская 123', 'Ул. Киевская 123'] },
		{ region: 'Ош', pickUpPoints: ['Ул. Московская 123', 'Ул. Киевская 123'] },
		{ region: 'Талас', pickUpPoints: ['Ул. Московская 123', 'Ул. Киевская 123'] },
		{ region: 'Чуй', pickUpPoints: ['Ул. Московская 123', 'Ул. Киевская 123'] },
		{
			region: 'Образец',
			pickUpPoints: ['Образец', 'Образец', 'Образец', 'Образец', 'Образец', 'Образец', 'Образец'],
		},
	] as const;

	return (
		<section className='flex gap-6 w-full h-[650px] relative'>
			<section className='h-full w-[350px] p-4 shrink-0 overflow-hidden'>
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
							<>
								<div
									onClick={() =>
										setPickUpRegion((prev) =>
											prev === null || prev !== region.region ? region.region : null
										)
									}
									key={idx}
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
											key={id}
											className={clsx(`flex items-center w-full bodyLarge text-secondary_text px-4 border-b-1 border-border
                      transition-all duration-100 cursor-pointer hover:text-secondary`,
												{ 'h-0 opacity-0 pointer-events-none duration-300': pickUpRegion !== region.region },
												{ 'h-10 pointer-events-auto duration-300': pickUpRegion === region.region }
											)}
										>
											{point}
										</div>
									))}
								</div>
							</>
						))}
					</div>
				</div>
			</section>

			<YandexMap coordinates={[42.8746, 74.6122]} />
		</section>
	);
};
