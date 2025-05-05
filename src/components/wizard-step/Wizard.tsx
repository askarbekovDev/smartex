import React from 'react';
import { WizardPropsType } from './wizard-step.types';
import clsx from 'clsx';

const Wizard = ({ position, wizardStepData }: WizardPropsType) => {
	return (
		<div className='w-full flex justify-between items-center px-3 mt-[32px] w750:mt-[58px] w650:mt-0 gap-3'>
			{wizardStepData.map((el) => (
				<div key={el.step} className='flex flex-col items-center w-[30%]'>
					<div
						className={clsx(
							'w-5 h-5 rounded-[50%] bg-icons flex justify-center items-center text-white font-[500] text-[12px]',
							{
								'bg-secondary': position === el.step,
							}
						)}
					>
						{el.step}
					</div>
					<p
						className={clsx(
							'uiInputLabel text-icons mt-2 text-center truncate overflow-hidden w-full',
							{
								'text-primary_text': position === el.step,
							}
						)}
					>
						{el.title}
					</p>
				</div>
			))}
		</div>
	);
};

export default Wizard;
