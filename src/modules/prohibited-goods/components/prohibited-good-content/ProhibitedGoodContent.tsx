import React from 'react';

type Subtitles = {
	title: Readonly<string>;
	question: Readonly<string>;
	subtitles: readonly string[];
};

export const ProhibitedGoodContent = ({ activeGood }: { activeGood: Subtitles }) => {
	return (
		<div className='w-full h-fit border w750:hidden border-gray-300 rounded-lg flex flex-col justify-between p-4 shadow-sm items-start gap-4'>
			<h6 className='h6 text-primary_text'>{activeGood.title}</h6>
			<ul className='ml-[16px]'>
				{activeGood.subtitles.map((subtitle, index) => (
					<li key={index} className='list-disc'>
						<p className='bodyText text-secondary_text'>{subtitle}</p>
					</li>
				))}
			</ul>
		</div>
	);
};
