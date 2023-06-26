const router=require('express').Router();
const EmpleadoModelo=require('../modules/empleado');
router.post('/create', (req, res, next)=>
{
    console.log(req.body);
    EmpleadoModelo.create(req.body)
    .then((data)=>
    {
        console.log('success');
        res.json(data);
    })
    .catch((err)=>
    {
        console.log(err);
        res.send("Error en la base de datos");
    });
});
router.get('/empleados', (req, res, next)=>
{
    EmpleadoModelo.find()
    .then((data)=>
    {
        res.json(data);
    })
    .catch((err)=>
    {
        console.log(err);
        res.send("error en la base de datos");
    });
});
router.get('/empleado/:id', (req, res, next)=>
{
    EmpleadoModelo.findById(req.params.id)
    .then((data)=>
    {
        res.json(data);
    })
    .catch((err)=>
    {
        res.send("Error en la base de datos");
        console.log(err);
    });
});
router.put('/update/:id', (req, res, next)=>
{
    console.log(req.params.id);
    console.log(req.body);
    EmpleadoModelo.findByIdAndUpdate(req.params.id, {$set:req.body})
    .then((data)=>
    {
        res.json(data);
    })
    .catch((err)=>
    {
        console.log(err);
        res.send("error en la base de datos");
    });
});
router.delete('/delete/:id', (req, res, next)=>
{
    EmpleadoModelo.findByIdAndRemove(req.params.id)
    .then((data)=>
    {
        res.json(data);
    })
    .catch((err)=>
    {
        console.log(err);
        res.send('error').statusCode(404);
    });
})
module.exports=router;