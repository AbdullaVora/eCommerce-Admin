import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import React, { Suspense } from 'react';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const AllProducts = React.lazy(() => import('./pages/Ecommerce/AllProducts'));
const AddProduct = React.lazy(() => import('./pages/Ecommerce/AddProduct'));
const Orders = React.lazy(() => import('./pages/Orders'));
const AllUsers = React.lazy(() => import('./pages/Users/AllUsers'));
const AddUser = React.lazy(() => import('./pages/Users/AddUser'));
const ViewProfile = React.lazy(() => import('./pages/Users/ViewProfile'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Aside />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/addproduct" element={<AddProduct />} />
          <Route path="/product/allproducts" element={<AllProducts />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users/allUsers" element={<AllUsers />} />
          <Route path="/users/addUser" element={<AddUser />} />
          <Route path="/users/profile" element={<ViewProfile />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
