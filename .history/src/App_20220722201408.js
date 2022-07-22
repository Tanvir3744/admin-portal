import Header from './components/Header/Header'
import {Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
