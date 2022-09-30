import { Repository } from 'typeorm';
import { TiendaEntity } from './tienda.entity';
export declare class TiendaService {
    private readonly tiendaRepository;
    constructor(tiendaRepository: Repository<TiendaEntity>);
    create(tienda: TiendaEntity): Promise<TiendaEntity>;
}
