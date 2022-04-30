import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemTable from './Components/ItemTable/ItemTable';
import ItemDetail from './Components/ItemDetail/itemDetail';
import Cart from './Components/Cart/cart';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemTable />}/>
          <Route path="/product/:productId" element={<ItemDetail/>}/>
          <Route path ="/cart" element={<Cart />}/>
        </Routes>
      </Router>
    </>
  )
   
}

export default App;
