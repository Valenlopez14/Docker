import express from 'express'
import pg from 'pg'

const {Pool}  = pg;
const pool = new Pool({
    host: '192.169.0.86',
    port: 5432,
    user: 'root',
    password: 'pass',
    database: 'tienda',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});
//Express
const app = express();
//Middlewares
app.use(express.json()) //Intenta leer un JSON y pasarlo a Objeto
app.use(express.urlencoded({extended:true})) //


const PORT = 3000;
//Mostrar todos los productos
app.get('/productos', async(req, res)=>{
    const respuesta = await pool.query('SELECT * FROM productos')
    console.log(respuesta.rows)
    res.json(respuesta.rows)
})
//Mostrar un producto por id 

app.get('/productos/:id', async(req, res) =>{
    const id = req.params.id
    const respuesta = await pool.query(`SELECT * FROM productos WHERE id =${id}`)
    res.json(respuesta.rows)
})
//Cargar un nuevo producto
app.post('/productos', async(req, res)=>{
    const {producto, precio} = req.body
    const respuesta = await pool.query(`INSERT INTO productos (producto, precio) VALUES($1, $2)`,[producto, precio]) 
    console.log(req.body)
    res.send('Producto nuevo');

})
//Modificar
app.put('productos/:id_producto', async (req,res)=> {
    const id = req.params.id
    const {producto, precio} = req.body
    try{
        const respuesta = await pool.query(`UPDATE productos SET producto=$1, precio=$2 WHERE id= ${id}`, [producto,precio])
        res.status(201).send('Producto modificado')
    }
    catch{
        res.status(500).send('Error en el servidor')
    }
    
    
})

//Eliminar
app.delete('/productos/:id', async(req, res)=>{
    const id = req.params.id
    const respuesta = await pool.query(`DELETE FROM productos WHERE id = ${id}`)
})


app.listen(PORT)
