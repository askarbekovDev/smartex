import { TarifCard } from '@/components';
import { array_tarif } from '@/components/tarif-card/lib';
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
			<div className='grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] justify-center gap-6 mt-4 h-fit'>
				{array_tarif.map((item) => (
					<TarifCard
						key={item.id}
						title={item.title}
						dollarPrice={item.dollarPrice}
						somPrice={item.somPrice}
						image={item.image}
					/>
				))}
			</div>
		</div>
	);
};
