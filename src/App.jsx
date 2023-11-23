import { BrowserRouter, Routes, Route, Link, useLocation} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Compra from './pages/Compra'

import Ayuda from './pages/ayuda'
import Info from './pages/info'
import CreateCompra from './pages/CreateCompra'
import LayoutBase from './layouts/LayoutBase'
import Character from './pages/Character'
import Registrate from './pages/Registrate'
import Products_Register from './pages/Products_Register'
import Service from './services/service'
import SubLogin from './pages/SubLogin'
import Home_Admin from './pages/Home_admin' 


function App() {

 
  return (
    <>
    
      <BrowserRouter>

        <LayoutBase path="/components/comprador">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Compra' element={<Compra />} />

            <Route path='/info' element={<Info />} />
            <Route path='/ayuda' element={<Ayuda />} />
            <Route path='/CreateCompra' element={<CreateCompra />} />
            <Route path='/Registrate' element={<Registrate/>} />
            <Route path='/character/:id' element={<Character />} />
            <Route path='/Products_Register' element={<Products_Register />} />
            <Route path='/Service' element={<Service />} />
            <Route path='/SubLogin' element={<SubLogin />} />
            <Route path='/Home_Admin' element={<Home_Admin />} />
            

          </Routes>
        </LayoutBase>
      </BrowserRouter>
    </>
  )
}

export default App
