import { ResetPasswordFormType } from '..';

export type FormFieldsType = {
	name: keyof ResetPasswordFormType;
	label: string;
	placeholder: string;
	type?: string;
};
