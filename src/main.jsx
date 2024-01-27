import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmBV_iwixM4KEDQOiLj5wkyCH87vQI-pw",
  authDomain: "my-ecommerce-587bc.firebaseapp.com",
  projectId: "my-ecommerce-587bc",
  storageBucket: "my-ecommerce-587bc.appspot.com",
  messagingSenderId: "756977070029",
  appId: "1:756977070029:web:add2267781590312acde84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App/>

  </ChakraProvider>
)
