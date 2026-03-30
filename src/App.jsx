import { Suspense, useState } from "react"

import Hero from "./Components/HeroSection/Hero"
import Stat from "./Components/HeroSection/Stat"
import NavBar from "./Components/NavBar/NavBar"
import ProductCard from "./Components/ProductCard/ProductCard"
import { ToastContainer } from "react-toastify"
import Step from "./Components/Steps/Step"

const DataPromist = async()=>{
  const res = await fetch('/products.json')
  return res.json();
}

function App() {
 const [allCart, setAllCart] = useState([])

  return (
    <>
      <NavBar allCart={allCart}/>
      <Hero/>
     <Stat/>
     <Suspense>
      <ProductCard DataPromist={DataPromist()} allCart={allCart} setAllCart={setAllCart}/>
     </Suspense>
     <Step/>

     <ToastContainer/>
    </>
  )
}

export default App
