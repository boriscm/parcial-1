/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CafeEntity } from './cafe.entity';
import { BusinessError, BusinessLogicException }  from '../shared/errors/business-errors'


@Injectable()
export class CafeService {

    constructor(
        @InjectRepository(CafeEntity)
        private readonly cafeRepository: Repository<CafeEntity>
    ){}

    async create(cafe: CafeEntity): Promise<CafeEntity>{
        if(cafe.precio >0){
            throw new BusinessLogicException("The cafe with the given precio is not valid", BusinessError.PRECONDITION_FAILED);
        }

        return await this.cafeRepository.save(cafe);
    }
}


