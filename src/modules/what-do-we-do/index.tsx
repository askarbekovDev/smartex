import { ToggleButton } from '@/UI';
import React, { FC } from 'react';

export const WhatDoWeDoBlock: FC = () => {
	return (
		<div>
			jwefbjwbfe
			<ToggleButton
				buttons={['История компании', 'Наша миссия', 'Зарубежные склады']}
				defaultWidth={165}
			/>
		</div>
	);
};
