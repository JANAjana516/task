import { Route, Routes} from "react-router-dom"
import BtmHeader from "./components/header/BtmHeader"
import TopHeader from "./components/header/TopHeader"
import Home from "./page/Home"
import ProductDetails from "./page/ProductDetails"
import Cart from "./page/incart/Cart"



function App() {
 


  return (
    <>
    <header>
      <TopHeader/>
      <BtmHeader/>
    </header>

    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/cart" element={ <Cart />} />
      <Route path="/product/:id" element={<ProductDetails />}/>

    </Routes>
   

    </>
  )
}

export default App
