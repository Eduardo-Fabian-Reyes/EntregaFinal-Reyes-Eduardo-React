import NavBar from './components/Common/NavBar'
import './App.css'
import ItemListContainer from './components/Shop/ItemListContainer';
import VinilosComponent from './components/VinilosView/VinilosComponent';
import ItemDetail from './components/Shop/ItemDetail';
import CDsComponent from './components/CdsView/CdsComponent';
import OfertasComponent from './components/OfertasView/OfertasComponent';
import AccesoriosComponent from './components/AccesoriosView/AccesoriosComponent';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route exact path='/' element={<ItemListContainer greeting='Bienvenidos a Bad Wave Recs' />} />
      <Route exact path='/product/:productId' element={<ItemDetail />} />
      <Route path='/Vinilos' element={<ItemListContainer greeting="Vinilos" category="Vinilos" />} />
      <Route path='/CDs' element={<ItemListContainer greeting="CDs" category="Cds" />} />
      <Route path='/Sale' element={<ItemListContainer greeting="Sale" category="Sale" />} />
      <Route path='/Accesorios' element={<ItemListContainer greeting="Accesorios" category="Accesorios" />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
