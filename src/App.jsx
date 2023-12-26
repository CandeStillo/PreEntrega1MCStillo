import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import CartWidget from "./components/CartWidget";
import ProductCategory from "./components/ProductCategory";

const App = () => {
  return (
    <BrowserRouter>

      <NavBar />
      
      
      <Routes>

        //solo una ruta
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/category/:id" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route exact path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
        <Route exact path="/producto/:id" element={<ItemDetailContainer/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<ContactUs/>}/>
        <Route exact path="/cart" element={<CartWidget/>}/>
        <Route exact path="/categoria/:categoria" element={<ProductCategory/>}/>
        {/* <Route exact path="/categoria1/:Phones" element={<Phones/>}/>
        <Route exact path="/categoria1/:Cases" element={<Cases/>}/>
        <Route exact path="/categoria1/:Charger" element={<Charger/>}/> */}
      </Routes>
      
      
      
    </BrowserRouter>





  );
};

export default App;
