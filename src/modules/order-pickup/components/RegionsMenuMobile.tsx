import React, { FC, useState } from 'react';
import { ArrowDropDown } from '../../../../public/icons';
import clsx from 'clsx';
import { regions } from '../bigRegionsData';
import { RegionsType } from '../types';

type RegionsMenuMobProps = {
	isMenuOpen: boolean;
	setCenter: React.Dispatch<
		React.SetStateAction<{
			center: [number, number];
			zoom: number;
		}>
	>;
	setMenuData: React.Dispatch<React.SetStateAction<string>>;
};

export const RegionsMenuMobile: FC<RegionsMenuMobProps> = ({
	isMenuOpen,
	setCenter,
	setMenuData,
}) => {
	const [menuOpen, setMenuOpen] = useState<boolean>(isMenuOpen);
	const [pickPoints, setPickPoints] = useState<string[] | null>(null);
	return (
		<>
			<div className='w-full h-0 relative'>
				{pickPoints && (
					<div
						className={clsx(
							'absolute top-18 left-1 w-fit h-fit bg-white transition-all duration-300 rounded-xl shadow-xl border-1 border-border',
							{ 'opacity-0 pointer-events-none': menuOpen },
							{ 'opacity-100 pointer-events-auto': !menuOpen }
						)}
					>
						{pickPoints.map((point, idx) => (
							<p
								className='bodyLarge text-secondary_text p-3 border-b-1 border-border
                     cursor-pointer hover:bg-white_hover last:border-b-0'
							>
								{point}
							</p>
						))}
					</div>
				)}
			</div>
			<section className='w-full h-fit overflow-hidden'>
				<div className='cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
					<div className='flex w-full h-12'>
						<div
							className={clsx(
								'flex items-center pl-4 w-full h-full bg-primary rounded-tl-lg bodyLarge text-white overflow-hidden',
								{ 'rounded-bl-0': menuOpen },
								{ 'rounded-bl-lg': !menuOpen }
							)}
						>
							Пункты выдачи по областям
						</div>
						<div
							className={clsx(
								'flex items-center justify-center w-10 h-full border-1 border-border rounded-tr-lg',
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
				<div //Main Drop Down Div
					className={clsx(
						'overflow-y-scroll transition-all duration-400',
						{ 'h-full pointer-events-auto': menuOpen },
						{ 'h-0 opacity-0 -translate-y-10 pointer-events-none': !menuOpen }
					)}
				>
					<div
						className={clsx(`w-full pt-3 bg-white w1050:border-1 w1050:border-border 
          w1050:border-b-0 rounded-b-lg w750:border-0 w750:pb-5 w750:px-4`)}
					>
						{regions.map((region, idx) => (
							<div key={idx}>
								<div
									onClick={() => {
										setCenter({
											center: [...region.regionCenter],
											zoom: region.region === 'Бишкек' ? 12 : region.region === 'Чуй' ? 10 : 13,
										});
										setMenuOpen(false);
										{
											setPickPoints(region.pickUpPoints.map((point) => point.adress));
										}
										// setRegionSelect((prev) =>
										//   prev === null || prev !== region.region ? region.region : null
										// );
										// setMenuData('');
									}}
									className={clsx(
										`flex items-center w-full h-10 bodyLarge px-4 border-b-1 border-border 
                    cursor-pointer transition-all duration-100 hover:bg-white_hover`
									)}
								>
									{region.region}
									<div className={clsx('transition-all duration-200')}></div>
								</div>
								{/* <div>
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
              </div> */}
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};
