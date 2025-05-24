import { RegsiterDesktopLeftBlock, Wizard } from '@/components';
import { AuthHeadLine } from '@/components/head-lines/AuthHeadLine';
import { WIZARD_STEP_DATA } from '@/utils/constants/wizardStep';
import { FirstStepRegisterForm } from '../..';

export const RegisterContactSection = () => {
	return (
		<section>
			<div className='max-w-[1440px] m-auto flex w950:flex-col justify-between items-start'>
				<div className='w-[45.2%] w1050:w-[50%] w950:w-[100%]'>
					<RegsiterDesktopLeftBlock />
				</div>
				<div className='w-[54.8%] w1050:w-[50%] w950:w-[100%] px-[100px] w1150:px-[40px] w950:p-[50px] flex flex-col justify-center items-center pt-[100px] pb-[88px]'>
					<div className='w-full w750:flex w950:flex-col-reverse'>
						<AuthHeadLine
							title='Регистрация'
							firstSubtitle='Все формы, являются обязательными!'
							secondSubtitle=' Используйте только кириллицу'
						/>
						<Wizard position={1} wizardStepData={WIZARD_STEP_DATA} />
					</div>
					<FirstStepRegisterForm />
				</div>
			</div>
		</section>
	);
};
