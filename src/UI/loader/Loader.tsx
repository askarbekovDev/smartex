export const Loader = () => {
	return (
		<>
			<div className='fixed inset-0 bg-black/40 transition-all duration-300 z-30'></div>
			<div
				className='absolute top-14 transition-all duration-300 z-50 px-5 max-w-[588px] w-full pointer-events-none
				 transform -translate-x-1/2 right-1/2 left-1/2 text-white'
			>
				Loader...
			</div>
		</>
	);
};
