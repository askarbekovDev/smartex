import { FAQ } from '@/modules/main-faq-modules';
import { TarifCard } from '../../../../components/tarif-card';
import { array_tarif } from '../../../../components/tarif-card/lib';

export const TarifSection = () => {
	return (
		<>
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
			<div className='mt-[120px]'>
				<FAQ variant='red' />
			</div>
		</>
	);
};
