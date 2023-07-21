
import { Route, Routes } from 'react-router'
import Landing from './pages/Landing'
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path= '/' element={<Landing />} />
      <Route path='/Dashboard' element={<Dashboard/>} />
    </Routes>  
    
  )

}

export default App;
