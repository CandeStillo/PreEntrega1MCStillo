import React from 'react'
import {Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Image} from '@chakra-ui/react'
import ItemCount from './ItemCount' 
import iphone12 from './assets/img/iphone12.jpg'
import { useParams } from 'react-router-dom'

const ItemDetail = ({producto}) => {

  return (
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={iphone12}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{producto.titulo}</Heading>
       <Text>
        {producto.descripcion}
      </Text> 
       <Text color='blue.600' fontSize='2xl'>
        ${producto.precio}
      </Text> 
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <ItemCount/> 
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default ItemDetail