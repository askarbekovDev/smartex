import React, { FC, useState } from 'react';
import { ArrowDropDown } from '../../../../public/icons';
import clsx from 'clsx';
import { RegionsType } from '../types';
import { regions } from '../bigRegionsData';

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

export const RegionsMenuMobile: FC<RegionsMenuMobProps> = ({ isMenuOpen, setCenter, setMenuData }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(isMenuOpen);
  const [regionSelect, setRegionSelect] = useState<RegionsType | null>(null);
  return (
    <section
      className='w-full h-fit overflow-hidden'
    >
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
                  setMenuOpen(false)
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
                <div
                  className={clsx(
                    'transition-all duration-200',
                    { 'rotate-270': regionSelect !== region.region },
                    { 'rotate-360': regionSelect === region.region }
                  )}
                >
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
