import { ShippingCalculator } from './components';

export const TarifPage = () => {
	return (
		<div>
			<div className='w-full h-[6.25rem] flex justify-between items-center w550:flex-col-reverse w550:items-start w550:h-fit w550:gap-[40px]'>
				<p className='h2 w850:h3 w550:h4'>Тарифы</p>
				<div className='flex gap-2'>
					<button>Тарифы</button>
					<button>Калькулятор</button>
					<button>Рассчет веса</button>
				</div>
			</div>
			<ShippingCalculator />
		</div>
	);
};
