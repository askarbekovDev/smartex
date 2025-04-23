import React, { FC } from 'react';
import { IntroAboutUs, SmartexTeam, CompanyStorySection, WhySmartexSection } from '@/modules';

const AboutUs: FC = () => {
	return (
		<>
			<IntroAboutUs />
			<CompanyStorySection />
			<WhySmartexSection />
			<SmartexTeam />
		</>
	);
};

export default AboutUs;
