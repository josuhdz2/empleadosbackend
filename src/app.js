//dependencias
const express=require('express');
const cors=require('cors');
const path=require('path');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const empleadosRutas=require('../src/routes/empleado');
const port=process.env.PORT || 3000;
mongoose.set('strictQuery', false);
const database='mongodb+srv://josue_hc:lj4uy15HYbtNs6RN@cluster0.zqufc4z.mongodb.net/empleados?retryWrites=true&w=majority';
//desarrollo
//base de datos
mongoose.connect(database)
.then(()=>
{
    console.log('Database connected...');
})
.catch((err)=>
{
    console.log('Database error...\n'+err);
});
//servidor
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/empleados-mean')));
app.use('/', express.static(path.join(__dirname, 'dist/empleados-mean')));
app.use('/api', empleadosRutas);
//manejadores de errores
app.use((req, res, next)=>
{
    next(createError(404));//aqui hay un error que no se puede resolver
});
app.use(function(err, req, res, next)
{
    console.error(err.message);
    if(!err.statusCode) err.statusCode=500;
    res.status(err.statusCode).send(err.message);
});
//escucha del servidor
app.listen(port, ()=>
{
    console.log('Server running on port 3000...');
});
//manejador de error