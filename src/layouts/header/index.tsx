import { HeaderDesktop } from '@/components/header';
import { HeaderMobile } from '@/components/header-mobile';
import React, { FC } from 'react';

export const Header: FC = () => {
	return (
		<header>
			<HeaderDesktop />
			<HeaderMobile />
		</header>
	);
};
