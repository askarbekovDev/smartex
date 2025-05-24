import { FC } from 'react';
import { HeaderDesktop } from './components/HeaderDesktop';
import { HeaderMobile } from './components/HeaderMobile';

export const Header: FC = () => {
	return (
		<header>
			<HeaderDesktop />
			<HeaderMobile />
		</header>
	);
};
