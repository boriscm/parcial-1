import { CafeEntity } from '../cafe/cafe.entity';
export declare class TiendaEntity {
    id: string;
    nombre: string;
    direccion: string;
    telefono: string;
    cafes: CafeEntity[];
}
