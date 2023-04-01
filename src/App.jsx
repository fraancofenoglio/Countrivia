import { useState } from 'react'
import './App.css'
import ArgentinaTrivia from './utils/ArgentinaTrivia.js';
import Header from './components/Header';

function App() {

  const [indiceRes, setIndiceRes] = useState(0);
  const [checkRespuesta, setCheckRespuesta] = useState("");
  const [correctas, setCorrectas] = useState(0);
  
  return (
    <>
      <Header/>
      <div className='elegir'>
        <label htmlFor="Seleccione país">¡Elegí el país!</label>
        <select name="Seleccione país" id="">
          <option value="ARG">Argentina</option>
          <option value="BRA">Brasil</option>
        </select>
      </div>

      <div >
        {
          indiceRes >= 10 ? <h2>Respuestas correctas: {correctas}</h2> : <>
              <h2 className='pregunta'>{ArgentinaTrivia[indiceRes].question}</h2>
              <div>{

                ArgentinaTrivia[indiceRes].answers.map((ans, i) => (
                  <div className='respuestas' key={i}>
                    <button className='btn-respuesta' disabled={checkRespuesta === "" ? false : true} onClick={() => {
                      if(ans === ArgentinaTrivia[indiceRes].correct){
                        setCheckRespuesta("¡Correcto!")
                        setCorrectas(correctas+1)
                      } else {
                        setCheckRespuesta("¡Incorrecto!")
                      }
                    }}>{ans}</button>
                  </div>
                ))
              }</div>
              {checkRespuesta}
              <button className='btn-continuar' onClick={() => {
                setIndiceRes(indiceRes+1);
                setCheckRespuesta("")
              }}>Continuar</button>

          </>
        }
      </div>


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
