import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import MainLogoImage from '../../../../public/icons/main-logo.svg';
import { BurgerMenu } from './BurgerMenu';
import { MobileNumsMenu } from './MobileNumsMenu';
import { NavLinks } from './NavLinks';
import { SocialMediaLinks } from './SocialMediaLinks';

export const HeaderDesktop: FC = () => {
	return (
		<div className='w-full h-30 w450:hidden'>
			<div className='bg-primary w-full'>
				<div className='container h-10 flex items-center justify-between'>
					<SocialMediaLinks />
					<MobileNumsMenu />
				</div>
			</div>
			<div className='container flex items-center justify-between w-full h-20'>
				<Link href='/'>
					<Image src={MainLogoImage} width={110} height={34} alt='Smartex' />
				</Link>
				<BurgerMenu />
				<NavLinks />
			</div>
		</div>
	);
};
