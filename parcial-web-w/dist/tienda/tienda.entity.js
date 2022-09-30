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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiendaEntity = void 0;
const cafe_entity_1 = require("../cafe/cafe.entity");
const typeorm_1 = require("typeorm");
let TiendaEntity = class TiendaEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TiendaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TiendaEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TiendaEntity.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TiendaEntity.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => cafe_entity_1.CafeEntity, cafes => cafes.tiendas),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], TiendaEntity.prototype, "cafes", void 0);
TiendaEntity = __decorate([
    (0, typeorm_1.Entity)()
], TiendaEntity);
exports.TiendaEntity = TiendaEntity;
//# sourceMappingURL=tienda.entity.js.map