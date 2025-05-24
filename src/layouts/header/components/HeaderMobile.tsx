'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { BurgerMobile, CloseIconMobile } from '../../../../public/icons';
import MainLogoImage from '../../../../public/icons/main-logo.svg';
import { DropDownMenu } from './DropDownMenu';
import { MobileNumsMenu } from './MobileNumsMenu';
import { SocialMediaLinks } from './SocialMediaLinks';

export const HeaderMobile: FC = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	return (
		<div
			className={clsx(
				'hidden container w450:block h-[108px] border-b-1 transition-all duration-500',
				{
					'bg-primary border-primary': menuOpen,
					'bg-background border-border': !menuOpen,
				}
			)}
		>
			<div className='relative flex justify-between items-end border-border border-r-1 border-l-1 w-full h-full'>
				<div
					className={clsx('absolute bottom-4 left-4 transition-all duration-500', {
						'translate-y-0 pointer-events-auto opacity-100': !menuOpen,
						'translate-y-14 pointer-events-none opacity-0': menuOpen,
					})}
				>
					<Link href='/'>
						<Image src={MainLogoImage} width={110} height={34} alt='Smartex' />
					</Link>
				</div>
				<div
					className={clsx('h-fit pl-4 transition-all duration-500 z-50 absolute bottom-[44px]', {
						'translate-x-0 opacity-100 pointer-events-auto': menuOpen,
						'translate-x-24 opacity-0 pointer-events-none': !menuOpen,
					})}
				>
					<MobileNumsMenu />
				</div>
				<SocialMediaLinks menuOpen={menuOpen} />
				<div
					onClick={() => setMenuOpen(!menuOpen)}
					className='flex justify-center items-center w-17 h-17 border-border border-l-1 border-t-1 rounded-tl-[20px]'
				>
					{menuOpen ? <CloseIconMobile /> : <BurgerMobile />}
					<DropDownMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				</div>
			</div>
		</div>
	);
};
