"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmTestingConfig = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const resena_entity_1 = require("../../resena/resena.entity");
const carrito_entity_1 = require("../../carrito/carrito.entity");
const categoria_entity_1 = require("../../categoria/categoria.entity");
const localizacion_entity_1 = require("../../localizacion/localizacion.entity");
const regalo_entity_1 = require("../../regalo/regalo.entity");
const tienda_entity_1 = require("../../tienda/tienda.entity");
const usuario_entity_1 = require("../../usuario/usuario.entity");
const wishlist_entity_1 = require("../../wishlist/wishlist.entity");
const TypeOrmTestingConfig = () => [
    typeorm_1.TypeOrmModule.forRoot({
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        entities: [wishlist_entity_1.WishlistEntity, regalo_entity_1.RegaloEntity, categoria_entity_1.CategoriaEntity, carrito_entity_1.CarritoEntity, usuario_entity_1.UsuarioEntity, tienda_entity_1.TiendaEntity, localizacion_entity_1.LocalizacionEntity, resena_entity_1.ResenaEntity],
        synchronize: true,
        keepConnectionAlive: true
    }),
    typeorm_1.TypeOrmModule.forFeature([wishlist_entity_1.WishlistEntity, regalo_entity_1.RegaloEntity, categoria_entity_1.CategoriaEntity, carrito_entity_1.CarritoEntity, usuario_entity_1.UsuarioEntity, tienda_entity_1.TiendaEntity, localizacion_entity_1.LocalizacionEntity, resena_entity_1.ResenaEntity]),
];
exports.TypeOrmTestingConfig = TypeOrmTestingConfig;
//# sourceMappingURL=typeorm-testing-config.js.map