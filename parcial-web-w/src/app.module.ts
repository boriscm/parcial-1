import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CafeModule } from './cafe/cafe.module';
import { TiendaModule } from './tienda/tienda.module';
import { TiendaCafeModule } from './tienda-cafe/tienda-cafe.module';



@Module({
  imports: [CafeModule, TiendaModule, TypeOrmModule.forRoot({
    type: 'postgres',
     host: 'localhost',
     port: 5432,
     username: 'postgres',
     password: 'postgres',
     database: 'museum',
     entities: [CafeModule, TiendaModule,],
     dropSchema: true,
     synchronize: true,
     keepConnectionAlive: true
  }), TiendaCafeModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
