import { AuthHeadLine } from '@/components/head-lines/AuthHeadLine';
import Wizard from '@/components/wizard-step/Wizard';
import React from 'react';
import { wizardStepData } from '../register-contact/constants/wizard-step';
import { RegisterIdLeftBlock } from './components/RegisterIdLeftBlock';
import { SecondStepRegisterForm } from './components/form/SecondStepRegisterForm';

export const RegisterIdentification = () => {
	return (
		<section>
			<div className='max-w-[1440px] m-auto flex w950:flex-col justify-between items-start'>
				<div className='w-[45.2%] w1050:w-[50%] w950:w-[100%]'>
					<RegisterIdLeftBlock />
				</div>
				<div className='w-[54.8%] w1050:w-[50%] w950:mt-[85px] w750:mt-0 w950:w-[100%] px-[100px] w1150:px-[40px] w950:p-[50px] w750:pt-[10px] flex flex-col justify-center items-center pt-[100px] pb-[88px]'>
					<div className='w-full w750:flex w950:flex-col-reverse'>
						<AuthHeadLine
							title='Регистрация'
							firstSubtitle='Все формы, являются обязательными!'
							secondSubtitle=' Используйте только кириллицу'
						/>
						<Wizard position={2} wizardStepData={wizardStepData} />
					</div>
					<SecondStepRegisterForm />
				</div>
			</div>
		</section>
	);
};
