import { useState } from 'react'
import { UsuarioContext } from './UsuariosContext'


export const UsuarioProvider = ({children}) => {
  const [usuario, setUsuario] = useState({})
  return (
    <UsuarioContext.Provider value={{usuario, setUsuario}}>
        {children}
    </UsuarioContext.Provider>
  )
}
