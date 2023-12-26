import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    
  return (
    <div>
      {
        productos.map((p) => {
          return(
            <div>
              
             <Item
             key={p.id}
             titulo = {p.titulo}
             id={p.id}
             />
            </div>
          )
        })
      }
    </div>
  )
}

export default ItemList