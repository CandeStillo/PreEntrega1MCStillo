import React from 'react'
import {Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Image} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
/* import ItemCount from './ItemCount' */
import iphone11 from './assets/img/iphone11.jpg'
const Item = ({titulo, id}) => {
  return (
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={iphone11}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{titulo}</Heading>
      {/* <Text>
        {descripcion}
      </Text> */}
      {/* <Text color='blue.600' fontSize='2xl'>
        ${precio}
      </Text> */}
    </Stack>
  </CardBody>
  <CardFooter>
    <Link to={`/producto/${id}`}>
    <Button> 
      Ver más información
    </Button>
    </Link>
    <ButtonGroup spacing='1'>
      {/* <ItemCount/> */} 
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default Item