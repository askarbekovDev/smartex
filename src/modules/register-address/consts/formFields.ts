import { FormFields } from '..';

export const FIELDS: FormFields[] = [
	{ name: 'cityAndVilage', label: '*Город/село', placeholder: '*Город/село', type: 'text' },
	{ name: 'street', label: '*Улица', placeholder: '*Улица', type: 'text' },
	{ name: 'apartment', label: '*Дом/квартира', placeholder: '*Дом/квартира', type: 'text' },
] as const;
