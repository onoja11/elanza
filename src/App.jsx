import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppLayout from './Layouts/AppLayout'
import Home from './pages/Home'

function App() {

  return (
   <Router>
      <Routes>
        <Route element={<AppLayout/>} >
        <Route path="/" element={<Home/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
