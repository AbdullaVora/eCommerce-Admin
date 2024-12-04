import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddProduct from './pages/AddProduct'
import Header from './components/header/Header'
import Aside from './components/aside/Aside'
import Footer from './components/footer/Footer'
import AllProducts from './components/allproducts/AllProducts'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/allproducts" element={<AllProducts />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
