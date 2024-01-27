import React from 'react'
import {Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Image} from '@chakra-ui/react'
import ItemCount from './ItemCount' 
import iphone12 from './assets/img/iphone12.jpg'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {doc, getDoc, getFirestore} from "firebase/firestore"


const ItemDetail = ({celulares}) => {
  const {id} = useParams();

  const [producto, setProducto] = useState([])
  
  useEffect(() => {
    const db = getFirestore();

    const celuRef = doc(db, "celulares", `${id}`);

    getDoc(celuRef).then((snapshot) =>{
      if(snapshot.exists()) {
        setProducto(snapshot.data());
      }else {
        console.log("No se encuentra el documento")
      }
    })
  }, []);
  const celusFilter = Array.isArray(celulares) ? celulares.filter ((celus) => celus.id == id) : [];
  return (
    <>
      {celusFilter.map((celus)=>(
        <div key={celus.id}>
      <Card maxW='sm'>
    <CardBody>
    <Image borderRadius="lg" src={image} />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{producto?.titulo}</Heading>
        <Text>
          {producto?.descripcion}
        </Text> 
        <Text color='blue.600' fontSize='2xl'>
          ${producto?.precio}
        </Text> 
        <Text color='blue.600' fontSize='2xl'>
          ${producto?.categoria}
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
          
        </div>
      ))}
    </>
  )
}

export default ItemDetail