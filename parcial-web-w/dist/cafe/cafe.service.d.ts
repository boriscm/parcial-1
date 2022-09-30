import { Repository } from 'typeorm';
import { CafeEntity } from './cafe.entity';
export declare class CafeService {
    private readonly cafeRepository;
    constructor(cafeRepository: Repository<CafeEntity>);
    create(cafe: CafeEntity): Promise<CafeEntity>;
}
