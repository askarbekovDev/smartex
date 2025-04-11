import clsx from 'clsx';

interface ArrowIconDescriptonProps {
	isActive?: boolean;
}

export const ArrowIconDescripton = ({ isActive = false }: ArrowIconDescriptonProps) => {
	return (
		<svg
			className={clsx(
				'w-4 h-4 transition-transform duration-300 ease-in-out fill-current',
				isActive ? 'rotate-180 text-white' : 'rotate-0 text-[#959595]'
			)}
			viewBox='0 0 14 8'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clipPath='url(#clip0_56_26658)'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M6.58521 6.42553L3.28529 3.12561L4.11013 2.30078L6.99763 5.18828L9.88513 2.30078L10.71 3.12561L7.41004 6.42553C7.30065 6.53489 7.15231 6.59632 6.99763 6.59632C6.84295 6.59632 6.6946 6.53489 6.58521 6.42553Z'
				/>
			</g>
			<defs>
				<clipPath id='clip0_56_26658'>
					<rect width='7' height='14' fill='white' transform='matrix(0 1 -1 0 14 0.5)' />
				</clipPath>
			</defs>
		</svg>
	);
};
