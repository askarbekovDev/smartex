import React, { FC } from 'react';
import { IntroAboutUs, SmartexTeam, WhatWeDoBlock, WhySmartex } from '@/modules';

const AboutUs: FC = () => {
	return (
		<>
			<IntroAboutUs />
			<WhatWeDoBlock />
			<WhySmartex />
			<SmartexTeam />
			{/* <hr />
			<br />
			<br />
			<br />
			<br /> */}
		</>
	);
};

export default AboutUs;
