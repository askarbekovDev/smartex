'use client';
import { AnimationRoad } from '@/components/footer/AnimationRoad';
import { LegalLinks } from '@/components/footer/LegalLinks';
import { FooterLinks } from '@/components/footer/FooterLinks';
import { MobileDownload } from '@/components/footer/MobileDownload';
import { DesctopDownload } from '@/components/footer/DesctopDownload';

export const Footer = () => {
	return (
		<footer className='mt-15 w850:mt-10'>
			<AnimationRoad />
			<DesctopDownload/>
			<MobileDownload />
			<FooterLinks />
			<LegalLinks />
		</footer>
	);
};
