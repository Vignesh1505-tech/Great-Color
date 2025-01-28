import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './Pages/Home/Home';
import ProductList from './Pages/ProductList/ProductList';
import Subproduct from './Pages/ProductList/SubProduct';


export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:header/:id" element={<ProductList />} />
          <Route path="/sub/:header" element={<Subproduct />} />

                  </Routes>
      </Layout>
    </Router>

  )
}
