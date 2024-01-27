import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import CartWidget from "./components/CartWidget";
import ShoppingCartContext, { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import Document from "./components/Document";
import Cart from "./components/Cart"
import Home from "./components/Home";

function App() {
  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  const [cart, setCart] = useState([])

  useEffect(()=>{
    setTimeout(() => {
      setProductos(("Producto A", "Producto B", "Producto C"))
      setLoading(false)
    }, 3000)
  }, [])

  if(loading){
    return <Loader/>
  }
  return (
    <ShoppingCartProvider >

      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route exact path="/" element={<Home/>} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route exact path="/producto/:id" element={<ItemDetailContainer />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      
      
      
      </BrowserRouter>
    </ShoppingCartProvider>





  );
}

export default App;
