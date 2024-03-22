// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";*/

import express from "express";
import cors from "cors";
const app = express();
app.use(express.json())
app.use(cors());
const port = 5000;
/*
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqnpF_ppBXsSawkDiVzYzm2oAV1zLvGWQ",
  authDomain: "prowess-web-database.firebaseapp.com",
  projectId: "prowess-web-database",
  storageBucket: "prowess-web-database.appspot.com",
  messagingSenderId: "519296320778",
  appId: "1:519296320778:web:739cc55990bd1a6e4866f3"
};

// Initialize Firebase
const fiapp = initializeApp(firebaseConfig);

const db = getFirestore(fiapp);
const storage = getStorage(fiapp);


app.post('/fb/producto/post',(req,res) =>{
  const novProduct = req.body.novProduct;
  try{
    const productRef = db.collection('producto').add(novProduct)
    console.log(productRef)
    return productRef;
  }catch(err){
    console.log("ERROR. INSERCIÓN FALLIDA",err)
  }


})

app.get('/fb/producto/get',(req,res) =>{
  try{
    const productRef = db.collection('producto').get()
    const productos = []
    productRef.forEach((productDoc)=>{
      productos.push({id: productDoc.id,...productDoc.data()});
    })
    console.log(productos)
    return productos;
  }catch(err){
    console.log("ERROR. RECUPERACIÓN DE DATOS FALLIDA.",err)
  }
})*/

import multer from 'multer';
const almacenamiento = multer.memoryStorage();
const upload = multer({ storage: almacenamiento });
// Import Firebase and Firestore
import * as producto from '../../V2/backend/Src/controller/productController.js';


// Configuración de Firebase (reemplaza con la configuración real de tu proyecto)
//Obtener todos los productos.
app.get('/fb/producto/get', producto.getProducts);

// Obtener un producto específico
app.get('/fb/producto/get/:id', producto.getProductByID);

// Agregar un nuevo producto
app.post('/fb/producto/post',upload.single('pro_imagen'),producto.createProduct);

// Actualizar el producto
app.put('/fb/producto/update/:id', producto.updateProduct);
// Eliminar
app.delete('/fb/producto/delete/:id', producto.deleteProduct);


// Importar las funciones relacionadas con los pedidos desde './orders'
import * as order from './Src/controller/orderController.js';

// Crear una instancia de Express


// Configurar las rutas para las funciones relacionadas con pedidos

// Ruta para manejar la creación de un pedido usando el método HTTP POST
app.post('/fb/order/createOrder', order.createOrder);

// Ruta para manejar la obtención de los pedidos relacionados con un usuario específico usando el método HTTP GET
app.get('/fb/order/getMyOrders/:id', order.getMyOrders);

// Ruta para manejar la eliminación de un pedido usando el método HTTP DELETE
app.delete('/fb/order/deleteOrder/:id', order.deleteOrder);

// Ruta para manejar la obtención de un pedido específico por su ID usando el método HTTP GET
app.get('/fb/order/getOrder/:id', order.getOrder);

// Ruta para manejar la marca de un pedido como pagado usando el método HTTP PUT
app.put('/fb/order/paid/:id', order.paid);

// Ruta para manejar la marca de un pedido como entregado usando el método HTTP PUT
app.put('/fb/order/delivered/:id', order.delivered);

// Ruta para manejar la obtención de todos los pedidos relacionados con un usuario específico usando el método HTTP GET
app.get('/fb/order/getOrders/:id', order.getOrders);

// Iniciar el servidor y hacer que escuche en el puerto definido
app.listen(port,() =>{
  console.log("Servidor en operación (Puerto 5000).")
})

// CategoryController

import * as categoria from './Src/controller/categoryController.js';

// Crear categorías
app.post('/fb/categoria/post', categoria.createCategory);

// Obtener todas las categorías
app.get('/fb/categoria/get', categoria.getCategories);

// Obtener una categoría específica
app.get('/fb/categoria/get/:id', categoria.getCategoryByID);

// Actualizar la categoría
app.put('/fb/categoria/update/:id', categoria.updateCategory);

// Eliminar la categoría
app.delete('/fb/categoria/delete/:id', categoria.deleteCategory);

// Importar las funciones relacionadas con los VENDEDORES desde './sellerController'

import * as vendedor from './Src/controller/sellerController.js';

// Crear nuevo vendedor
app.post('/fb/vendedor/createSeller', vendedor.createSeller);

//Obtener todos los vendedores.
app.get('/fb/vendedor/getSeller', vendedor.getSeller);

// Obtener un vendedor específico
app.get('/fb/vendedor/getSeller/:id', vendedor.getSellerByID);

// Actualizar el vendedor
app.put('/fb/vendedor/updateSeller/:id', vendedor.updateSeller);

// Eliminar el vendedor
app.delete('/fb/vendedor/deleteSeller/:id', vendedor.deleteSeller);


//==================================//

// SupplierController
import * as proveedor from './Src/controller/supplierController.js';

// Crear un nuevo proveedor
app.post('/fb/proveedor/post', proveedor.createSupplier);

// Obtener todos los proveedores
app.get('/fb/proveedor/get', proveedor.getSupplier);

// Obtener un proveedor específico
app.get('/fb/proveedor/get/:id', proveedor.getSupplierByID);

// Actualizar el proveedor
app.put('/fb/proveedor/update/:id', proveedor.updateSupplier);

// Eliminar el proveedor
app.delete('/fb/proveedor/delete/:id', proveedor.deleteSupplier);

//==================================//

// Importar las funciones relacionadas con los usuarios desde './userController'
import * as usuario from './Src/controller/userController.js';
import * as tokencontroller from "./Src/middleware/verifyToken.js";

// Crear un nuevo usuario
app.post('/fb/usuario/login',upload.none(), usuario.loginUser);
app.post('/fb/usuario/register', upload.none(), usuario.registerUser);