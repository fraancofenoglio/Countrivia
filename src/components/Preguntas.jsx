import { useState } from "react";

const Preguntas = ({pais}) => {

    const [indiceRes, setIndiceRes] = useState(0);
    const [checkRespuesta, setCheckRespuesta] = useState("");
    const [correctas, setCorrectas] = useState(0);
    console.log(pais)

    

    if (!pais) {
        return <h2>Elegi un país para comenzar</h2>
    }

  return (
    <div>
        {
          indiceRes >= 10 ? <h2>Respuestas correctas: {correctas}</h2> : <>
              <h2 className='pregunta'>{pais[indiceRes].question}</h2>
              <div>{

                pais[indiceRes].answers.map((ans, i) => (
                  <div className='respuestas' key={i}>
                    <button className='btn-respuesta' disabled={checkRespuesta === "" ? false : true} onClick={() => {
                      if(ans === pais[indiceRes].correct){
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
  )
}

export default Preguntas