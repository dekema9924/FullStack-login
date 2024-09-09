import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import Register from "./components/Register"
import {Route, Routes} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <>   
    <Toaster position="top-right" toastOptions={{duration: 2000}}/>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>

      </Routes>
    </>
  )
}

export default App
