const {Schema, model}=require('mongoose');
const empleadoSchema=new Schema({
    nombre:{type:String, require:true},
    departamento:{type:String, require:true},
    email:{type:String, require:true},
    telefono:{type:String, require:true}
});//mediante el parametro collection se puede agregar el nombre de la coleccion
module.exports=model('empleado', empleadoSchema);