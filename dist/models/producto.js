"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const productoSchema = new mongoose_1.Schema({
    tiendita: { type: mongoose_1.Types.ObjectId, ref: "tiendita", required: true },
    categorias: [
        {
            categoria: { type: mongoose_1.Types.ObjectId, ref: "categoria" },
        },
    ],
    photo: { type: mongoose_1.Types.ObjectId, ref: "photo" },
    photo1: { type: mongoose_1.Types.ObjectId, ref: "photo" },
    photo2: { type: mongoose_1.Types.ObjectId, ref: "photo" },
    nombre: { type: String, maxlength: 50, required: true },
    descripcion: { type: String, maxlength: 150 },
    stock: { type: Number, default: 0 },
    precio_venta: { type: Number, default: 0 },
    moneda: {
        type: String,
        enum: ["BOLIVIANOS", "DOLARES"],
        default: "BOLIVIANOS",
    },
    estado: { type: Boolean, default: 1 },
    createdAt: { type: Date, default: Date.now },
});
productoSchema.plugin(mongoose_paginate_v2_1.default);
/* productoSchema.methods.createProducto=():TProducto=>{
  productoSchema as unknown as TProducto
  return productoSchema;
} */
const Producto = mongoose_1.model('producto', productoSchema);
//const Producto = model<IProducto>("producto", productoSchema);
exports.default = Producto;
