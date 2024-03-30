import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Contacto } from './components/Contacto'
import { NavBar } from './components/NavBar'
function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/Contacto' Component={Contacto}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
