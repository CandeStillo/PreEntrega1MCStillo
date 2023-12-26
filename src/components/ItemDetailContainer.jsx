import React from 'react'
import ItemDetail from './ItemDetail'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({greeting}) => {
  const {id} = useParams()

  const productos = [
    {id: 1, titulo: "Producto A", descripcion: "descripcion de Producto A", precio: 1000},
    {id: 2, titulo: "Producto B", descripcion: "descripcion de Producto B", precio: 2000},
    {id: 3, titulo: "Producto C", descripcion: "descripcion de Producto C", precio: 3000}
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


    const productoFiltrado = productos.find((producto) => producto.id == id)

  return (
    <div>
      <div className='container'>
        <ItemDetail
        /* key={p.id} */
        producto={productoFiltrado}
        />
      </div>
    
    </div>
  )
}

export default ItemDetailContainer