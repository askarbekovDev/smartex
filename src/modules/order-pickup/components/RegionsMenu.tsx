import React, { FC, useState } from 'react';
import { ArrowDropDown } from '../../../../public/icons';
import clsx from 'clsx';
import { RegionsType } from '../types';
import { regions } from '../bigRegionsData';

type RegionsMenuProps = {};

export const RegionsMenu: FC = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(true);
	const [regionSelect, setRegionSelect] = useState<RegionsType | null>(null);
	return (
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
									setMenuData('');
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
	);
};
