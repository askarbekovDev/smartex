import { ResetPasswordFormType } from '../schemas/ResetPassword.schema';

export type FormFieldsType = {
	name: keyof ResetPasswordFormType;
	label: string;
	placeholder: string;
	type?: string;
};
