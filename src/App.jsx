import './App.css'
import { useContext } from 'react';
import  {AppContext} from './context/AppContext.jsx'
import Header from './components/Header';
import Preguntas from './components/Preguntas';
import SeleccionPais from './components/SeleccionPais';

function App() {

  const context = useContext(AppContext);
  const {iniciar, setIniciar, pais, setPais} = context
  console.log(iniciar)

  return (
    <>
    
    <Header/>

    { !iniciar ?
      <SeleccionPais/>
      :
      <Preguntas pais={pais} setIniciar={setIniciar}/>
    }
    </>

  )
}

export default App
