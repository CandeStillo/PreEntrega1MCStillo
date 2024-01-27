import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { QuerySnapshot, collection, getDoc, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [celus, setCelus] = useState([])
  const {categoria} = useParams();

  useEffect(() => {
    const db = getFirestore()
    const celusCollection = collection(db, "celulares");
    getDocs(celusCollection).then((querySnapshot) => {
      const celus = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCelus(celus)
    })
  },[]);
    const productosFiltrados = celus.filter((celu) => celu.categoria == categoria)


  return (
    <div className='container'>
      {
      categoria ? <ItemList celus={productosFiltrados}/> : <ItemList key={celus.id} celus={celus}/> 
      } 
    </div>
  )
}

export default ItemListContainer