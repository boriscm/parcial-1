import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TiendaEntity } from './tienda.entity';
import { BusinessError, BusinessLogicException }  from '../shared/errors/business-errors'

@Injectable()
export class TiendaService {
    constructor(
        @InjectRepository(TiendaEntity)
        private readonly tiendaRepository: Repository<TiendaEntity>
        ){}


    async create(tienda: TiendaEntity): Promise<TiendaEntity>{
        if(tienda.telefono.length != 10){
            throw new BusinessLogicException("The tienda with the given telefono is not valid", BusinessError.PRECONDITION_FAILED);
        }

        return await this.tiendaRepository.save(tienda);
    }
}
