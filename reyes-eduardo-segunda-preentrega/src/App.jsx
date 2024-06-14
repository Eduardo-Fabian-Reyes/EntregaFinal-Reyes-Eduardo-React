import NavBar from './components/Common/NavBar'
import ItemListContainer from './components/Shop/ItemListContainer';
import ItemDetail from './components/Shop/ItemDetail';
import './components/Shop/ItemListContainer.css'
import Checkout from './components/Checkout/Checkout';
import './App.css'

import CartView from './components/CartView/CartView';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route exact path='/' element={<ItemListContainer greeting='Bienvenidos a Bad Wave Recs' />} />
      <Route exact path='/product/:productId' element={<ItemDetail />} />
      <Route exact path='/:category' element={<ItemListContainer />} />
      <Route path='/cart' Component={CartView}></Route>
      <Route path='/checkout' Component={Checkout} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
