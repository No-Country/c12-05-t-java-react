import { Route, Routes } from 'react-router'
import Landing from './pages/Landing'
import Login from './pages/Login'
import { Dashboard } from './pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path= '/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
    </Routes>  
    
  )
}

export default App;
