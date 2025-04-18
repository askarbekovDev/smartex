'use client';

import {
	AnimationRoad,
	DesctopDownload,
	FooterLinks,
	LegalLinks,
	MobileDownload,
} from './components';

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
