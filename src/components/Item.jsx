import React from 'react'
import {Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Image, Img} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
/* import ItemCount from './ItemCount' */

const Item = ({titulo, id, precio, descripcion, categoria, image}) => {
  return (
    <Card maxW='sm'>
      <Image borderRadius="lg" src={image} />
  <CardBody>
    <Stack mt='6' spacing='3'>
    
      <Heading size='md'>{titulo}</Heading>
       <Text>
        {descripcion}
      </Text> 
      <Text color='blue.600' fontSize='2xl'>
        ${precio}
      </Text> 
      <Text>
        Categoría : {categoria}
      </Text>
    </Stack>
  </CardBody>
  <Divider/>
  <CardFooter>
    <Button> 
    <Link to={`/producto/${id}`}>
      Ver más información
    </Link>
    </Button>
    <ButtonGroup spacing='1'>
      {/* <ItemCount/> */} 
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default Item