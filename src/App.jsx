import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/header/Header'
import Aside from './components/aside/Aside'
import Footer from './components/footer/Footer'
import AllProducts from './pages/Ecommerce/AllProducts'
import AddProduct from './pages/Ecommerce/AddProduct'
import Orders from './pages/Orders'
import AllUsers from './pages/Users/AllUsers'
import AddUser from './pages/Users/AddUser'
import ViewProfile from './pages/Users/ViewProfile'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecommerce/addproduct" element={<AddProduct />} />
        <Route path="/ecommerce/allproducts" element={<AllProducts />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users/allUsers" element={<AllUsers />} />
        <Route path="/users/addUser" element={<AddUser />} />
        <Route path="/users/profile" element={<ViewProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
