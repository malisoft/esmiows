import { PaginateModel,Schema, model,Document,Types } from "mongoose";
import paginate from "mongoose-paginate-v2";
export interface IProducto extends Document{  
  _id: string,
  nombre: string,
  descripcion?: string,
  stock: number,
  precio_venta: number,
  moneda: string ,
  estado: boolean,
  createdAt: string,
  tiendita?:string,
  categoria?:string[],
  photo?:string,
  photo1?:string,
  photo2?:string,
}
const productoSchema = new Schema({
  tiendita: { type: Types.ObjectId, ref: "tiendita", required: true },
  categorias: [
    {
      categoria: { type: Types.ObjectId, ref: "categoria" },
    },
  ],
  photo: { type: Types.ObjectId, ref: "photo" },
  photo1: { type: Types.ObjectId, ref: "photo" },
  photo2: { type: Types.ObjectId, ref: "photo" },
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
productoSchema.plugin(paginate)
interface ProductModel<T extends Document> extends PaginateModel<T> {}
/* productoSchema.methods.createProducto=():TProducto=>{
  productoSchema as unknown as TProducto
  return productoSchema;
} */
const Producto: ProductModel<IProducto> = model<IProducto>('producto', productoSchema) as ProductModel<IProducto>;
//const Producto = model<IProducto>("producto", productoSchema);
export default Producto;