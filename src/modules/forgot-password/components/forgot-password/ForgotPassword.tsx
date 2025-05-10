import React from 'react';
import { AuthHeadLine, ForgotPasswordLeftBlock } from '@/components';
import { ForgotPasswordForm } from '../..';

export const ForgotPasswordSection = () => {
	return (
		<section>
			<div className='max-w-[1440px] m-auto flex w950:flex-col justify-between items-start'>
				<div className='w-[45.2%] w1050:w-[50%] w950:w-[100%]'>
					<ForgotPasswordLeftBlock />
				</div>
				<div className='w-[54.8%] w1050:w-[50%] w950:w-[100%] px-[100px] w1150:px-[40px] w950:p-[50px] flex flex-col justify-center items-center pt-[327px] pb-[88px]'>
					<div className='w-full w750:flex w950:flex-col-reverse'>
						<AuthHeadLine
							title='Забыли пароль?'
							firstSubtitle='Пожалуйста, введите зарегистрированный адрес электронной почты адрес для сброса пароля'
						/>
					</div>
					<ForgotPasswordForm />
				</div>
			</div>
		</section>
	);
};
