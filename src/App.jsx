import { Navigate, Routes, Route } from "react-router-dom"
import {NavBar} from "./routers/components/NavBar"
import {HomeScreen} from "./routers/HomeScreen"
import {AboutScreen} from "./routers/AboutScreen"
import {ContactScreen} from "./routers/ContactScreen"
import {LoginScreen} from "./routers/LoginScreen"
import { UsuarioProvider } from "./routers/context/UsuarioProvider"
export const App = () => {
  return (
    <UsuarioProvider>
        <NavBar></NavBar>

        <Routes>
              <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
              <Route path='/login' element={<LoginScreen></LoginScreen>}></Route>
              <Route path='about' element={<AboutScreen></AboutScreen>}></Route>
              <Route path='contact' element={<ContactScreen></ContactScreen>}></Route>
              <Route path="/*" element={<Navigate to={'/'}/>}></Route>
        </Routes>
        
    </UsuarioProvider>
  )
}
