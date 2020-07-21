import mongoose, { Schema } from "mongoose";
import { Types } from "mongoose";

const tienditaSchema = new Schema({
  usuario: { type: Types.ObjectId, ref: "usuario", required: true },
  nick: { type: String, maxlength: 50, required: true, unique: true },
  nombre: { type: String, maxlength: 50 },
  descripcion: { type: String, maxlength: 50, required: true },
  nit: { type: String, maxlength: 50, unique: false, default: "S/N" },
  categorias: [
    {
      categoria: { type: Types.ObjectId, ref: "categoria" },
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
  portada: { type: Types.ObjectId, ref: "photo" },
  icono: { type: Types.ObjectId, ref: "photo" },
});

const Tiendita = mongoose.model("tiendita", tienditaSchema);
export default Tiendita;
