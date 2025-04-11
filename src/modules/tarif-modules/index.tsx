import { ToggleButton } from '@/UI';
import { ShippingCalculator } from './components';

export const TarifPage = () => {
	return (
		<div>
			<div className='w-full h-[6.25rem] flex justify-between items-center w550:flex-col-reverse w550:items-start w550:h-fit w550:gap-[40px]'>
				<p className='h2 w850:h3 w550:h4'>Тарифы</p>
				<ToggleButton buttons={['Тарифы', 'Калькулятор', 'Рассчет веса']} defaultWidth={100} />
			</div>
			<ShippingCalculator />
		</div>
	);
};
