import { IProducto } from '../models/producto';
//for get ids from a productos array and use this return in query with mongoose for exclude this items
export const getIdsProducts=(items:IProducto[])=>{
    let ids:string[]=[];
    for(const producto of items){
        ids.push(producto._id)
    }
    return ids;
}