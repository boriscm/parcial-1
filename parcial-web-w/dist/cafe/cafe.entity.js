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
exports.CafeEntity = void 0;
const tienda_entity_1 = require("../tienda/tienda.entity");
const typeorm_1 = require("typeorm");
let CafeEntity = class CafeEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CafeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CafeEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CafeEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CafeEntity.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => tienda_entity_1.TiendaEntity, tienda => tienda.cafes),
    __metadata("design:type", Array)
], CafeEntity.prototype, "tiendas", void 0);
CafeEntity = __decorate([
    (0, typeorm_1.Entity)()
], CafeEntity);
exports.CafeEntity = CafeEntity;
//# sourceMappingURL=cafe.entity.js.map