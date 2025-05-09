import clsx from 'clsx';
import React from 'react';

type Subtitles = {
	title: Readonly<string>;
	subtitles: readonly string[];
};

export const ProhibitedGoodMobileContent = ({ title, subtitles }: Subtitles) => {
	return (
		<div
			className={clsx(
				'w750:block hidden transition-[max-height,opacity] duration-700 ease-in-out overflow-auto',
				title ? 'min-h-[300px] block' : 'hidden'
			)}
		>
			<h6 className='h6 text-primary_text'>{title}</h6>
			<ul className='ml-[16px]'>
				{subtitles.map((subtitle, index) => (
					<li key={index} className='list-disc'>
						<p className='bodyText text-primary_text'>{subtitle}</p>
					</li>
				))}
			</ul>
		</div>
	);
};
