import { AuthHeadLine, ForgotPasswordLeftBlock } from '@/components';
import { ForgotPasswordOtpForm } from '../..';

export const ForgotPasswordOtpSection = () => {
	return (
		<section>
			<div className='max-w-[1440px] m-auto flex w950:flex-col justify-between items-start'>
				<div className='w-[45.2%] w1050:w-[50%] w950:w-[100%]'>
					<ForgotPasswordLeftBlock />
				</div>
				<div className='w-[54.8%] w1050:w-[50%] w950:w-[100%] px-[100px] w1150:px-[40px] w950:p-[50px] w750:mt-[60px] w550:px-[30px] w370:px-[10px] flex flex-col justify-center items-center pt-[327px] pb-[88px]'>
					<div className='w-full flex justify-center items-center'>
						<AuthHeadLine
							title='Введите код подтверждения'
							firstSubtitle='Пожалуйста, введите 6-значный код, который мы отправили'
						/>
					</div>
					<ForgotPasswordOtpForm />
				</div>
			</div>
		</section>
	);
};
