"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const categoriaSchema = new mongoose_1.Schema({
    nombre: { type: String, maxlength: 50, unique: true, required: true },
    descripcion: { type: String, maxlength: 255, required: true },
    icon: { type: String, maxlength: 255, required: true },
    createdAt: { type: Date, default: Date.now }
});
const Categoria = mongoose_1.model('categoria', categoriaSchema);
exports.default = Categoria;
