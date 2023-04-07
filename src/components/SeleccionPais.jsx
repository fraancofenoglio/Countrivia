import ArgentinaTrivia from '../utils/ArgentinaTrivia.js';
import BrasilTrivia from '../utils/BrasilTrivia.js';

const SeleccionPais = ({setIniciar, setPais}) => {
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
     <button className='btn-continuar' onClick={() => setIniciar(true)}>Comenzar</button>
    </>
  )
}

export default SeleccionPais