"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const mongoose_2 = require("mongoose");
const tienditaSchema = new mongoose_1.Schema({
    usuario: { type: mongoose_2.Types.ObjectId, ref: "usuario", required: true },
    nick: { type: String, maxlength: 50, required: true, unique: true },
    nombre: { type: String, maxlength: 50 },
    descripcion: { type: String, maxlength: 50, required: true },
    nit: { type: String, maxlength: 50, unique: false, default: "S/N" },
    categorias: [
        {
            categoria: { type: mongoose_2.Types.ObjectId, ref: "categoria" },
        },
    ],
    calificacion: {
        valor: { type: String, maxlength: 70, default: "0" },
        cantidad: { type: String, maxlength: 70, default: "0" },
    },
    clientes: {
        type: String,
        maxlength: 50,
        default: "0",
    },
    ubicacion: {
        pais: { type: String, enum: ["BOLIVIA"], default: "BOLIVIA" },
        departamento: { type: String, maxlength: 50 },
        cuidad: { type: String, maxlength: 50 },
        direccion: { type: String, maxlength: 150 },
        latlng: {
            lat: { type: String, maxlength: 20 },
            lng: { type: String, maxlength: 20 },
        },
    },
    telefono: { type: String, maxlength: 20 },
    estado: { type: Boolean, default: 0 },
    abierto: { type: Boolean, default: 0 },
    createdAt: { type: Date, default: Date.now },
    portada: { type: mongoose_2.Types.ObjectId, ref: "photo" },
    icono: { type: mongoose_2.Types.ObjectId, ref: "photo" },
});
const Tiendita = mongoose_1.default.model("tiendita", tienditaSchema);
exports.default = Tiendita;
