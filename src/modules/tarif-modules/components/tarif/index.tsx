import { TarifCard } from '../../../../components/tarif-card';
import { array_tarif } from '../../../../components/tarif-card/lib';

export const TarifSection = () => {
	return (
		<div className='grid grid-cols-3 w1050:grid-cols-2 w650:grid-cols-1 justify-center gap-6 mt-4 h-fit'>
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
	);
};
