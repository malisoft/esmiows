import ProductoModel, { IProducto } from "../models/producto";
import CategoriaModel from "../models/categoria";
import "../models/categoria"
import "../models/tiendita"
import "../models/photo"
import { getIdsProducts } from '../libs/index';

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
]
export class Producto {
    private count: number;
    constructor() {
        this.count = 0;
    }
    async create(producto: IProducto): Promise<IProducto> {
        let newProducto = new ProductoModel(producto)
        let productResult: IProducto = await newProducto.save();
        return productResult;
    }
    async search(query: string, preferences: string[]): Promise<IProducto[]> {
        this.count++;
        console.log(this.count);

        let preferencesID: string[] = await CategoriaModel.find({ nombre: { $in: preferences } }, { _id: 1 })

        //{ $regex: '.*' + name + '.*' } }  ==> is "like" in sql
        let productoArray: IProducto[] = await ProductoModel
            .paginate(
                {
                    $or: [
                        { nombre: { $regex: '.*' + query + '.*' } },
                        { descripcion: { $regex: '.*' + query + '.*' } },
                    ],

                    "categorias._id": preferencesID,

                },
                {
                    populate: {
                        path: "categorias._id",
                        model: "categoria",
                        select: ["nombre", "icon"],

                    }
                }
            ) as unknown as IProducto[]
        return productoArray;
    }
    async getIndex(preferences: string): Promise<IProducto[]> {
        let longResult: number = 10;
        let preferencesArray: string[] = preferences ? preferences.split(",") : []
        let preferencesID: string[] = await CategoriaModel.find({ nombre: { $in: preferencesArray } }, { _id: 1 })
        let productoArray: IProducto[] = await ProductoModel
            .find(
                {
                    "categorias._id": preferencesID ? preferencesID : [],
                },
            ).populate(
                populateParams
            ).limit(longResult).skip(Math.random() * 10) as IProducto[]
        longResult = longResult - productoArray.length;
        let productoArrayRest: IProducto[] = await ProductoModel
            .find(
                {
                    _id: { $nin: getIdsProducts(productoArray) }
                }
            ).populate(populateParams).limit(longResult).skip(Math.random() * 10) as IProducto[];

        return productoArray.concat(productoArrayRest);
    }
    get(_id: string): IProducto {
        throw new Error("Method not implemented.");
    }
    update(_id: string, producto: IProducto): boolean {
        throw new Error("Method not implemented.");
    }
    delete(_id: string) {
        throw new Error("Method not implemented.");
    }

}
