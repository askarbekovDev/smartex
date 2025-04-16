import { HeaderDesktop, HeaderMobile } from '@/layouts/header/components';
import React, { FC } from 'react';

export const Header: FC = () => {
	return (
		<header>
			<HeaderDesktop />
			<HeaderMobile />
		</header>
	);
};
