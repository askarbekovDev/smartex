import { IntroPickupPoints } from '@/modules/intro-pickup-points';
import { OrderPickUp } from '@/modules/order-pickup';
import { FC } from 'react';

const PickUpPoints: FC = () => {
	return (
		<>
			<IntroPickupPoints />
			<OrderPickUp />
		</>
	);
};

export default PickUpPoints;
