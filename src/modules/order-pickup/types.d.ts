type OrderPickUpContentType = 'Пункты выдачи' | 'Бесплатная доставка' | 'Условия для доставки';
import { regions } from './bigRegionsData';
export type RegionsType = (typeof regions)[number]['region'];
