import fs from "fs";//Import del módulo File System de Node.js



let carts = [];//Array para almacenar los carritos
let pathFile = "./src/data/carts.json";//Ruta del archivo JSON donde se almacenarán los carritos

const getCarts = async () => {
  const cartsJson = await fs.promises.readFile(pathFile, "utf-8");//Parsea el JSON y lo asigna al array carts, si el archivo está vacío asigna un array vacío
  carts = JSON.parse(cartsJson) || [];

  return carts;
};//Función asíncrona para obtener todos los carritos desde el archivo JSON

const createCart = async () => {
  await getCarts(); // Obtiene todos los carritos existentes
  const newCart = {
    id: carts.length + 1,//Crea un nuevo carrito con un ID único y autoincremental y sin productos
    products: []
  };
  
  carts.push(newCart);//Agrega el nuevo carrito al array carts
  await fs.promises.writeFile(pathFile, JSON.stringify(carts));//Escribe los carritos actualizados en el archivo JSON
  
  return newCart;//Devuelve el nuevo carrito creado
};//Función asíncrona para crear un nuevo carrito


const getCartsById = async (cid) => {
  await getCarts();//Obtiene todos los carritos existentes
  const cart = carts.find(cart => cart.id === cid);//Busca un carrito por su ID

  if (!cart) {
    const error = new Error(`Cart with ${cid} doesn't exist`);
    error.status = 404;
    throw error;
  };//Si no se encuentra el carrito, devuelve un error y  mensaje

  return cart.products;//Devuelve los productos del carrito
};//Función asíncrona para obtener los productos de un carrito por su ID


const addProductToCart = async (cid, pid) => {
  await getCarts();//Obtiene todos los carritos existentes
  const index = carts.findIndex(cart => cart.id === cid);//Encuentra el índice del carrito en el array carts
  
  if (index === -1) return `Cart with ${cid} doesn't exist`;//Si el carrito no existe, devuelve un mensaje

  const productIndex = carts[index].products.findIndex(p => p.product === pid);//Busca si el producto ya existe en el carrito
  
  if (productIndex !== -1){
    carts[index].products[productIndex].quantity++;//Si lo encuentra agrega al producto una cantidad predeterminada de 1
  } else {
    carts[index].products.push({
      product: pid,
      quantity: 1
  });//Si no lo encuentra, se agrega al carrito con la cantidad predeterminada de 1
  };
  await fs.promises.writeFile(pathFile, JSON.stringify(carts));

  return carts[index];//Devuelve el carrito con el producto agregado
};//Función asíncrona para agregar un producto a un carrito


const deleteCart = async (cid) => {
  await getCarts(); //Obtiene todos los carritos
  carts = carts.filter((cart) => cart.id !== parseInt(cid)); //Filtra los carritos y excluye el que coincida con el ID dado
  await fs.promises.writeFile(pathFile, JSON.stringify(carts)); //Escribe los carritos actualizados en el archivo JSON
};//Función asíncrona para eliminar un producto por su ID


export default { getCarts, createCart, getCartsById, addProductToCart, deleteCart };//Exportamos todas las funciones como un objeto