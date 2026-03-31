import { Suspense, useState } from "react"

import Hero from "./Components/HeroSection/Hero"
import Stat from "./Components/HeroSection/Stat"
import NavBar from "./Components/NavBar/NavBar"
import ProductCard from "./Components/ProductCard/ProductCard"
import { ToastContainer } from "react-toastify"
import Step from "./Components/Steps/Step"
import Pricing from "./Components/Pricing/Pricing"
import FirstFooter from "./Components/Footer/FirstFooter"
import FooterMain from "./Components/Footer/FooterMain"

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
     <Pricing/>
     <FirstFooter/>
     <FooterMain/>

  {/* toastify ToastContainer for toast alert */}
     <ToastContainer/>
    </>
  )
}

export default App
