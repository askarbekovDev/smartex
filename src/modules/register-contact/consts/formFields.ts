import { FormFieldsType } from '../types/registeContactForm';

export const FIELDS: FormFieldsType[] = [
	{ name: 'lastName', label: '*Фамилия', placeholder: '*Фамилия', type: 'text' },
	{ name: 'firstName', label: '*Имя', placeholder: '*Имя', type: 'text' },
	{ name: 'email', label: '*Почта', placeholder: '*E-mail адрес', type: 'email' },
	{ name: 'phone', label: '*Телефон', placeholder: '*Телефон', type: 'text' },
	{ name: 'password', label: '*Пароль', placeholder: '*Пароль', type: 'password' },
	{
		name: 'confirmPassword',
		label: '*Повторите пароль',
		placeholder: '*Повторите пароль',
		type: 'password',
	},
];
