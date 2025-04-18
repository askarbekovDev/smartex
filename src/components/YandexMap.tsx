'use client';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { FC } from 'react';

type YandexMapProps = {
	coordinates: [number, number];
};

export const YandexMap: FC<YandexMapProps> = ({ coordinates }) => {
	return (
		<YMaps>
			<Map
				defaultState={{ center: coordinates, zoom: 15 }}
				state={{ center: coordinates, zoom: 15 }}
				width='100%'
				height='100%'
			>
				<Placemark
					geometry={coordinates}
					options={{
						iconLayout: 'default#image',
						iconImageHref: '/icons/map-pin-custom.svg',
						iconImageSize: [42, 49],
						iconImageOffset: [-21, -49], // чтобы остриё было в центре
					}}
				/>
			</Map>
		</YMaps>
	);
};
