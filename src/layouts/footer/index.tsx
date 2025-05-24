'use client';

import { AnimationRoad } from './components/AnimationRoad';
import { DesctopDownload } from './components/DesctopDownload';
import { FooterLinks } from './components/FooterLinks';
import { LegalLinks } from './components/LegalLinks';
import { MobileDownload } from './components/MobileDownload';

export const Footer = () => {
	return (
		<footer className='mt-15 w850:mt-10'>
			<AnimationRoad />
			<DesctopDownload />
			<MobileDownload />
			<FooterLinks />
			<LegalLinks />
		</footer>
	);
};
