
import { Route, Routes } from 'react-router'
import Landing from './pages/Landing'
import { Home }from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path= '/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
    </Routes>  
    
  )

}

export default App;
