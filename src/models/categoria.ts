import {Schema,model} from 'mongoose';

const categoriaSchema = new Schema({
    nombre:{type:String, maxlength:50,unique:true,required:true},
    descripcion: {type:String,maxlength:255,required:true},
    icon: {type:String,maxlength:255,required:true},
    createdAt:{type:Date,default:Date.now}
});

const Categoria = model('categoria',categoriaSchema);

export default Categoria;