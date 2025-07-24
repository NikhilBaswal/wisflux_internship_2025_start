"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
let ProductsService = class ProductsService {
    products = [
        {
            id: 1,
            name: "nikhil",
            age: 19,
            status: "student"
        },
        {
            id: 2,
            name: "abhishek",
            age: 21,
            status: "software engineer"
        },
        {
            id: 3,
            name: "ankit",
            age: 20,
            status: "model"
        }
    ];
    findAll() {
        return this.products;
    }
    findById(id) {
        const product = this.products.find((p) => p.id === id);
        if (!product) {
            throw new Error("oops, user not found! ");
        }
        return product;
    }
    create(productData) {
        const newProduct = {
            id: Date.now().toString(),
            ...productData,
        };
        this.products.push(newProduct);
        return {
            message: ' Product created successfully!',
            product: newProduct,
        };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map