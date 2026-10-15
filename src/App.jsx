 
import './App.css'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import StakePage from './Pages/StakePage';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Stake" element={<StakePage />} />
          
        </Routes>

      </BrowserRouter>
      
      
    </>
  )
}

export default App
