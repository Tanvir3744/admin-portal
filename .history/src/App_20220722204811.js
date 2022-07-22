import Header from './components/Header/Header'
import {Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import ProductDetail from './components/Products/ProductDetail';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path='/products/:productId' element = {<ProductDetail></ProductDetail>} />
      </Routes>
    </div>
  );
}

export default App;
