import React, { FC } from 'react';
import { IntroAboutUs, SmartexTeam, WhatWeDoBlock, WhySmartex } from '@/modules';

const AboutUs: FC = () => {
	return (
		<>
			<IntroAboutUs />
			<WhatWeDoBlock />
			<WhySmartex />
			<SmartexTeam />
		</>
	);
};

export default AboutUs;
