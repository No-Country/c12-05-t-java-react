import { Route, Routes } from 'react-router'
import Landing from './pages/Landing'
import Login from './pages/Login'
import { Stock } from './pages/Stock'

function App() {
  return (
    <Routes>
      <Route path= '/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/stock' element={<Stock />} />
    </Routes>  
    
  )

}

export default App;
