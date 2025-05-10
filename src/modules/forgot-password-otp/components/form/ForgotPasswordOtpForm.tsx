'use client';

import { OtpInput } from '@/UI';
import { Button } from '@/UI/Button';
import React, { useState } from 'react';

export const ForgotPasswordOtpForm = () => {
	const [otp, setOtp] = useState('');

	const handleOtpChange = (code: string) => {
		setOtp(code);
	};

	const handleSubmit = () => {
		console.log('Submitted OTP:', otp);
	};

	return (
		<div className='w-full py-10 text-center w950:max-w-[690px] w950:px-[50px] w650:px-[20px] w550:px-[5px]'>
			<OtpInput onChange={handleOtpChange} />
			<p className='uiInputLabel text-secondary_text mt-[71.7px]'>Отправить повторно — 00:59</p>
			<Button onClick={handleSubmit} className='mt-[32px]'>
				Отправить
			</Button>
		</div>
	);
};
