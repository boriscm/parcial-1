import { TiendaEntity } from '../tienda/tienda.entity';
export declare class CafeEntity {
    id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    tiendas: TiendaEntity[];
}
