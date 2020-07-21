"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const producto_1 = __importDefault(require("../models/producto"));
const categoria_1 = __importDefault(require("../models/categoria"));
require("../models/categoria");
require("../models/tiendita");
require("../models/photo");
const index_1 = require("../libs/index");
const populateParams = [
    {
        path: "photo",
        model: "photo",
        select: ["imageURL", "public_id"]
    },
    {
        path: "photo1",
        model: "photo",
        select: ["imageURL", "public_id"]
    },
    {
        path: "photo2",
        model: "photo",
        select: ["imageURL", "public_id"]
    },
    {
        path: "categorias._id",
        model: "categoria",
        select: ["nombre", "icon"],
    },
    {
        path: "tiendita",
        model: "tiendita",
        select: ["_id", "nick", "nombre", "icono"],
        populate: {
            path: "icono",
            model: "photo",
            select: ["imageURL", "public_id"],
        },
    }
];
class Producto {
    constructor() {
        this.count = 0;
    }
    create(producto) {
        return __awaiter(this, void 0, void 0, function* () {
            let newProducto = new producto_1.default(producto);
            let productResult = yield newProducto.save();
            return productResult;
        });
    }
    search(query, preferences) {
        return __awaiter(this, void 0, void 0, function* () {
            this.count++;
            console.log(this.count);
            let preferencesID = yield categoria_1.default.find({ nombre: { $in: preferences } }, { _id: 1 });
            //{ $regex: '.*' + name + '.*' } }  ==> is "like" in sql
            let productoArray = yield producto_1.default
                .paginate({
                $or: [
                    { nombre: { $regex: '.*' + query + '.*' } },
                    { descripcion: { $regex: '.*' + query + '.*' } },
                ],
                "categorias._id": preferencesID,
            }, {
                populate: {
                    path: "categorias._id",
                    model: "categoria",
                    select: ["nombre", "icon"],
                }
            });
            return productoArray;
        });
    }
    getIndex(preferences) {
        return __awaiter(this, void 0, void 0, function* () {
            let longResult = 10;
            let preferencesArray = preferences ? preferences.split(",") : [];
            let preferencesID = yield categoria_1.default.find({ nombre: { $in: preferencesArray } }, { _id: 1 });
            let productoArray = yield producto_1.default
                .find({
                "categorias._id": preferencesID ? preferencesID : [],
            }).populate(populateParams).limit(longResult).skip(Math.random() * 10);
            longResult = longResult - productoArray.length;
            let productoArrayRest = yield producto_1.default
                .find({
                _id: { $nin: index_1.getIdsProducts(productoArray) }
            }).populate(populateParams).limit(longResult).skip(Math.random() * 10);
            return productoArray.concat(productoArrayRest);
        });
    }
    get(_id) {
        throw new Error("Method not implemented.");
    }
    update(_id, producto) {
        throw new Error("Method not implemented.");
    }
    delete(_id) {
        throw new Error("Method not implemented.");
    }
}
exports.Producto = Producto;
