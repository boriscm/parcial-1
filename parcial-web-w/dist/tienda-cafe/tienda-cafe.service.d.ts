import { CafeEntity } from '../cafe/cafe.entity';
import { Repository } from 'typeorm';
import { TiendaEntity } from '../tienda/tienda.entity';
export declare class TiendaCafeService {
    private readonly tiendaRepository;
    private readonly cafeRepository;
    constructor(tiendaRepository: Repository<TiendaEntity>, cafeRepository: Repository<CafeEntity>);
    addCafeTienda(idTienda: string, idCafe: string): Promise<TiendaEntity>;
}
