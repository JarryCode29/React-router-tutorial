import { useContext } from "react"
import { useForm } from "./hooks/useForm"
import { UsuarioContext } from "./context/UsuariosContext"

export const LoginScreen = () => {
  

  const initialForm = {
    nombre:'',
    tecnologia: '',
    email:'',
    redes:''
  }

  const {fontState, nombre,tecnologia, email, redes,onInputChange } = useForm(initialForm)
  const {setUsuario} = useContext(UsuarioContext)

  const onSubmit = (e) =>{
    e.preventDefault()
    setUsuario(fontState)
  }
  return (
    <>
    <form onSubmit={onSubmit}>
  <div className="mb-3">
    <label htmlfor="nombre" className="form-label"> Nombre</label>
    <input 
    type="text" 
    className="form-control" 
    name="nombre"
    value={nombre}
    onChange={onInputChange}
    />
  </div>

  <div className="mb-3">
    <label htmlfor="tecnologia" className="form-label"> Tecnologia</label>
    <input 
    type="text" 
    className="form-control" 
    name="tecnologia"
    value={tecnologia}
    onChange={onInputChange}
    />
  </div>

  <div className="mb-3">
    <label htmlfor="email" className="form-label">Email</label>
    <input 
    type="text" 
    className="form-control" 
    name="email"
    value={email}
    onChange={onInputChange}
    />
  </div>

  <div className="mb-3">
    <label htmlfor="redes" className="form-label"> Redes</label>
    <input 
    type="text" 
    className="form-control" 
    name="redes"
    value={redes}
    onChange={onInputChange}
    />
  </div>

  
  
  <button type="submit" className="btn btn-primary">Registrar usuario</button>
</form>
    </>
  )
}
