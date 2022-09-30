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
exports.TiendaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tienda_entity_1 = require("./tienda.entity");
const business_errors_1 = require("../shared/errors/business-errors");
let TiendaService = class TiendaService {
    constructor(tiendaRepository) {
        this.tiendaRepository = tiendaRepository;
    }
    async create(tienda) {
        if (tienda.telefono.length != 10) {
            throw new business_errors_1.BusinessLogicException("The tienda with the given telefono is not valid", business_errors_1.BusinessError.PRECONDITION_FAILED);
        }
        return await this.tiendaRepository.save(tienda);
    }
};
TiendaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tienda_entity_1.TiendaEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TiendaService);
exports.TiendaService = TiendaService;
//# sourceMappingURL=tienda.service.js.map