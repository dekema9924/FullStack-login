import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import Register from "./components/Register"
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { DashboardAuth, LoginRouteAuth } from "./components/utils/ProtectedRoutes";


function App() {

  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <Routes>

      <Route element={<LoginRouteAuth/>}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>



        <Route element={<DashboardAuth/>}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>


      </Routes>



    </>
  )
}

export default App
