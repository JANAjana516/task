import { Route, Routes} from "react-router-dom"
import Home from "./page/Home"
import Side from "./page/Side"
import Header from "./page/Header"
import Body from "./page/Body"


function App() {
  return (
    <>
    <Routes>
      <Route path="/ecommerce-store/" element={<Home/>} />
      
    
    </Routes>
    </>
  )
}

export default App
