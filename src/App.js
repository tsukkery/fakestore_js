import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet, useParams , Navigate } from 'react-router-dom';
import ProductPage from './companies/ProductPage'; 
import HomePage from './companies/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<HomePage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="product" element={<Navigate to="/product/1" replace />} />
      </Routes>
    </Router>
  
  );
}
export default App;