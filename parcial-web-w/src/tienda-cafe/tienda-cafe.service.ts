/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CafeEntity } from '../cafe/cafe.entity';
import { Repository } from 'typeorm';
import { TiendaEntity } from '../tienda/tienda.entity';

@Injectable()
export class TiendaCafeService {
    constructor(
        @InjectRepository(TiendaEntity)
        private readonly tiendaRepository: Repository<TiendaEntity>,

        @InjectRepository(CafeEntity)
        private readonly cafeRepository: Repository<CafeEntity>
    ){}


    async addCafeTienda(idTienda:string, idCafe: string): Promise<TiendaEntity>{

        const cafe:CafeEntity = await this.cafeRepository.findOne({where: {id:idCafe}});

        const tienda: TiendaEntity = await this.tiendaRepository.findOne({where:{id: idTienda}, relations: ["cafes"]})
   
        tienda.cafes = [...tienda.cafes, cafe]
        return await this.tiendaRepository.save(tienda)
    }

}
