import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'secondary' | 'success' | 'error';
	size?: 'small' | 'medium' | 'large';
};

const buttonVariantMap = {
	primary: 'bg-primary hover:bg-primary_hover',
	secondary: 'bg-secondary hover:bg-secondary_hover',
	success: 'bg-success hover:bg-success_hover',
	error: 'bg-error hover:bg-error_hover',
} as const;

const buttonSizeMap = {
	small: 'rounded px-5 py-[0.625rem] font-normal text-[0.813rem] leading-4',
	medium: 'py-[0.875rem] px-4 rounded-lg font-bold leading-[1.25rem]',
	large: 'py-5 px-[0.625rem] rounded-2xl font-bold leading-[1.25rem]',
} as const;

const baseStyles = 'w-full font-lato text-white duration-300 transition-[background-color]';

export const Button = ({ className, ...props }: ButtonProps) => {
	const variant = buttonVariantMap[props.variant || 'primary'];
	const size = buttonSizeMap[props.size || 'medium'];

	return <button className={clsx(baseStyles, variant, size, className)} {...props} />;
};
