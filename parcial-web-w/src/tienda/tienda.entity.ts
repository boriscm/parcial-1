
import { CafeEntity } from '../cafe/cafe.entity';
import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';

@Entity()
export class TiendaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre:string;

    @Column()
    direccion:string;

    @Column()
    telefono: string;

    @ManyToMany(()=> CafeEntity, cafes => cafes.tiendas)
    @JoinTable()
    cafes: CafeEntity[];

}
