
import { Route, Routes } from 'react-router'
import Landing from './pages/Landing'
import Login from './pages/Login'


function App() {
  return (
    <Routes>
      <Route path= '/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
    </Routes>  
    
  )

}

export default App;
