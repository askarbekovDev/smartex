import React from 'react';
import { RegisterAddressLeftBlock } from '../register-address/components/RegisterAddressLeftBlock';
import { AuthHeadLine } from '@/components/head-lines/AuthHeadLine';
import { RegsiterDesktopLeftBlock } from '../register-contact/components/RegsiterDesktopLeftBlock';
import { LoginForm } from './components/form/LoginForm';

export const LoginSection = () => {
	return (
		<section>
			<div className='max-w-[1440px] m-auto flex w950:flex-col justify-between items-start'>
				<div className='w-[45.2%]  w1050:w-[50%] w950:hidden'>
					<RegisterAddressLeftBlock />
				</div>
				<div className='hidden w-[45.2%] w950:block  w950:w-[100%]'>
					<RegsiterDesktopLeftBlock />
				</div>
				<div className='w-[54.8%] w1050:w-[50%] w950:w-[100%] px-[100px] w1150:px-[40px] w950:p-[50px] flex flex-col justify-center items-center pt-[230px] pb-[88px]'>
					<div className='w-full w750:flex w950:flex-col-reverse'>
						<AuthHeadLine
							title='Войти в свой аккаунт'
							firstSubtitle='Пожалуйста, введите свой адрес электронной почты и пароль'
							secondSubtitle='для входа'
						/>
					</div>
					<LoginForm />
				</div>
			</div>
		</section>
	);
};
