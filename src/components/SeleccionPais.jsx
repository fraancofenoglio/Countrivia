import ArgentinaTrivia from '../utils/ArgentinaTrivia.js';
import BrasilTrivia from '../utils/BrasilTrivia.js';
import { useContext } from 'react';
import {AppContext} from '../context/AppContext.jsx'

const SeleccionPais = () => {

  const {setIniciar, setPais, pais} = useContext(AppContext)

  return (
    <>
     <div className='elegir'>
       <label htmlFor="Seleccione país">¡Elegí el país!</label>
       <select name="Seleccione país" id="" onChange={(e) => {
         setPais(JSON.parse(e.target.value))
       }}>
         <option>-- Seleccione --</option>
         <option value={JSON.stringify(ArgentinaTrivia)}>Argentina</option>
         <option value={JSON.stringify(BrasilTrivia)}>Brasil</option>
       </select>
     </div>
      
     {/* agrego boton y estado porque al seleccionar un pais me sigue mostrando el
      select entonces puede cambiar de pais y adelantarse preguntas */}
     <button className='btn-continuar' onClick={() => pais ? setIniciar(true) : setIniciar(false)}>Comenzar</button>
    </>
  )
}

export default SeleccionPais