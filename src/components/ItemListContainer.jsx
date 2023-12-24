import React from 'react'

const ItemListContainer = ({greeting}) => {

  const productos = [
    {titulo: "Producto A", descripcion: "descripcion de Producto A", precio: 1000},
    {titulo: "Producto B", descripcion: "descripcion de Producto B", precio: 2000},
    {titulo: "Producto C", descripcion: "descripcion de Producto C", precio: 3000}
  ]

  const mostrarProdcutos = new Promise((resolve, reject) =>{
    if (productos.length > 0){
      setTimeout(()=> {
        resolve(productos)
      }, 3000)
    } else {
      reject("No se obtuvieron productos")
    }
  })
  mostrarProdcutos
    .then((resultado) => {
      console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <div>{greeting}</div>
  )
}

export default ItemListContainer