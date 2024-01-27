import React from 'react'
import ItemDetail from './ItemDetail'
import './ItemListContainer.css'
import {useState, useEffect} from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ItemDetailContainer = ({greeting}) => {

  const [data, setData] = useState ([]);
  useEffect(() => {
    const db = getFirestore()
    const celusCollection = collection(db, "celulares");
    getDocs(celusCollection).then((querySnapshot) => {
      const celus = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(celus);
    }, [])
  })


  return (
    <ItemDetail celus={data}/>
  )
}

export default ItemDetailContainer