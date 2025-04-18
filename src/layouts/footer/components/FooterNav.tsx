import React from 'react';
import { IFooterLink, IFooterLinks } from './footer.types';

export const FooterNav = ({ section }: {section: IFooterLinks}) => {
	return (
		<div>
			<p className='h6 text-white mb-2'>{section.title}</p>
			<ul className='text-white space-y-1'>
				{section.links.map((item: IFooterLink, idx: number) => (
					<li key={idx} className={`${item.icon ? 'flex items-center gap-2' : ''}`}>
						{item?.icon && item?.icon}
						{item.label}
					</li>
				))}
			</ul>
		</div>
	);
};
