import { useState } from 'react'
import './App.css'

import Header from './components/Header';
import Preguntas from './components/Preguntas';
import SeleccionPais from './components/SeleccionPais';

function App() {

  const [pais, setPais] = useState();
  const [iniciar, setIniciar] = useState(false)

  return (
    <>
      <Header/>

    { !iniciar ?
      <SeleccionPais setPais={setPais} setIniciar={setIniciar}/>
      :
      <Preguntas pais={pais} setIniciar={setIniciar}/>
    }



      {/* <>  
        {
          <h2 className='pregunta'>{questionIndex+1 + ". " + ArgentinaTrivia[questionIndex].question}</h2>
        }
          <div className='respuestas'>
            {ArgentinaTrivia[questionIndex].answers.map((ans, i) => (
              
              <button className='btn-respuesta' disabled={checkAnswer === "" ? false : true} onClick={() => {
                
                if(ans === ArgentinaTrivia[questionIndex].correct){
                  setCheckAnswer("¡Correcto!")
                } else {
                  setCheckAnswer("¡Incorrecto!")
                }
  
              }} key={i}>{ans}</button>
            ))}
            <h3>
               {checkAnswer}
            </h3>
            {
              checkAnswer !== "" ? <button className='btn-continuar' onClick={() => {
                setCheckAnswer("");
                if (questionIndex === 9) {
                  setMessage("Listo!")
                }
                setQuestionIndex(questionIndex+1);
              }}>Continuar</button> : ""
            }
          </div>

          <h4>{message}</h4>
      </> */}


    </>
  )
}

export default App
