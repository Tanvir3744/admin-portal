import Header from './components/Header/Header'
import {Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Products></Products>}></Route>
      </Routes>
      <Header/>
      
    </div>
  );
}

export default App;
