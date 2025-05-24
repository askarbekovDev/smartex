import { CompanyStorySection } from '@/modules/company-story';
import { IntroAboutUs } from '@/modules/intro-about-us';
import { SmartexTeam } from '@/modules/smartex-team';
import { WhySmartexSection } from '@/modules/why-smartex';
import { FC } from 'react';

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
