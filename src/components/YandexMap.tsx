'use client';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { FC, useEffect, useRef } from 'react';

type YandexMapProps = {
	coordinatesArr: [number, number][];
	center: [number, number];
	zoom: number;
};

export const YandexMap: FC<YandexMapProps> = ({ coordinatesArr, center, zoom }) => {
	const mapRef = useRef<ymaps.Map | null>(null);

	useEffect(() => {
		if (mapRef.current) {
			mapRef.current.panTo(center, {
				delay: 0,
				flying: true,
			});
		}
	}, [center]);

	useEffect(() => {
		if (mapRef.current) {
			mapRef.current.setZoom(zoom);
		}
	}, [zoom]);

	return (
		<YMaps>
			<Map
				state={{ center, zoom }}
				instanceRef={(ref) => {
					if (ref) mapRef.current = ref;
				}}
				width='100%'
				height='100%'
				options={{
					suppressMapOpenBlock: true,
				}}
			>
				{coordinatesArr.map((coordinate, idx) => (
					<Placemark
						key={idx}
						geometry={coordinate}
						options={{
							iconLayout: 'default#image',
							iconImageHref: '/icons/map-pin-custom.svg',
							iconImageSize: [42, 49],
							iconImageOffset: [-21, -49],
						}}
					/>
				))}
			</Map>
		</YMaps>
	);
};
