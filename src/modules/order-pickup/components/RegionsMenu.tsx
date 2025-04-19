import React, { FC, useState } from 'react';
import { ArrowDropDown } from '../../../../public/icons';
import clsx from 'clsx';
import { RegionsType } from '../types';
import { regions } from '../bigRegionsData';

type RegionsMenuProps = {
	isMenuOpen: boolean;
	setCenter: React.Dispatch<
		React.SetStateAction<{
			center: [number, number];
			zoom: number;
		}>
	>;
	setMenuData: React.Dispatch<React.SetStateAction<string>>;
};

export const RegionsMenu: FC<RegionsMenuProps> = ({ isMenuOpen, setCenter, setMenuData }) => {
	const [menuOpen, setMenuOpen] = useState<boolean>(isMenuOpen);
	const [regionSelect, setRegionSelect] = useState<RegionsType | null>(null);
	return (
		<section
			className='h-full w-[350px] p-4 shrink-0 overflow-hidden bg-white rounded-l-2xl truncate
      w1050:h-fit w1050:rounded-2xl w1050:bg-background w1050:shadow-xl w1150:w-[330px] w950:w-[300px] w850:w-[280px]'
		>
			<div className='cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
				<div className='flex w-full h-10'>
					<div
						className={clsx(
							'flex items-center pl-4 w-full h-full bg-primary rounded-tl-lg bodyLarge text-white overflow-hidden',
							{ 'rounded-bl-0': menuOpen },
							{ 'rounded-bl-lg': !menuOpen }
						)}
					>
						<span className='w-full truncate'>Пункты выдачи по областям</span>
					</div>
					<div
						className={clsx(
							'flex items-center justify-center w-10 h-full border-[0.5px] border-primary rounded-tr-lg',
							{ 'rounded-br-0': menuOpen },
							{ 'rounded-br-lg': !menuOpen }
						)}
					>
						<div className={clsx('transition-all duration-300', { 'rotate-180 ': menuOpen })}>
							<ArrowDropDown />
						</div>
					</div>
				</div>
			</div>
			<div
				className={clsx(
					'overflow-y-scroll transition-all duration-300',
					{ 'h-full pointer-events-auto': menuOpen },
					{ 'h-0 opacity-0 -translate-y-10 pointer-events-none': !menuOpen }
				)}
			>
				<div
					className={clsx('w-full pt-3 bg-white w1050:border-1 w1050:border-border rounded-b-lg')}
				>
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
