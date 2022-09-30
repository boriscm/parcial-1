"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiendaCafeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cafe_entity_1 = require("../cafe/cafe.entity");
const typeorm_2 = require("typeorm");
const tienda_entity_1 = require("../tienda/tienda.entity");
let TiendaCafeService = class TiendaCafeService {
    constructor(tiendaRepository, cafeRepository) {
        this.tiendaRepository = tiendaRepository;
        this.cafeRepository = cafeRepository;
    }
    async addCafeTienda(idTienda, idCafe) {
        const cafe = await this.cafeRepository.findOne({ where: { id: idCafe } });
        const tienda = await this.tiendaRepository.findOne({ where: { id: idTienda }, relations: ["cafes"] });
        tienda.cafes = [...tienda.cafes, cafe];
        return await this.tiendaRepository.save(tienda);
    }
};
TiendaCafeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tienda_entity_1.TiendaEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(cafe_entity_1.CafeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TiendaCafeService);
exports.TiendaCafeService = TiendaCafeService;
//# sourceMappingURL=tienda-cafe.service.js.map