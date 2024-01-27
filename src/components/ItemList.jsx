import React from 'react'
import Item from './Item'
import { Container } from '@chakra-ui/react'

const ItemList = ({celus}) => {
    
  return (
    <div>
      <Container className='main-catalogue'>
      {
        celus.map((celu) => {
          return(
            <div key={celu.id}>
              
             <Item
             key={celu.id}
             titulo = {celu.titulo}
             id={celu.id}
             precio={celu.precio}
             descripcion={celu.descripcion}
             categoria={celu.categoria}
             image={celu.image}
             />
            </div>
          )
        })
      }
        
      </Container>
    </div>
  )
}

export default React.memo(ItemList)