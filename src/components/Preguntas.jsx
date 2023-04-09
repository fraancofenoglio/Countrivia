import { useContext, useEffect, useState } from "react";
import {AppContext} from '../context/AppContext.jsx'


const Preguntas = () => {

    const {setIniciar, pais} = useContext(AppContext);
    const [indiceRes, setIndiceRes] = useState(0);
    const [checkRespuesta, setCheckRespuesta] = useState("");
    const [correctas, setCorrectas] = useState(0);
    const [indiceSeleccionado, setIndiceSeleccionado] = useState();
    const [intervalo, setIntervalo] = useState(10);

    useEffect(() => {

      if (indiceSeleccionado) {
        return
      }
      setTimeout(() => {
        if (intervalo === 0) {
          setCheckRespuesta("¡Sin tiempo!")
          return
        }
        setIntervalo(intervalo-1)
      }, 1000);

    }, [intervalo])
    


    if (!pais) {
        return <h2>Elegi un país para comenzar</h2>
    }

  return (
    <div>
      <h1>{intervalo}</h1>
        {
          indiceRes >= 10 ?
           <>
            <h2>Respuestas correctas: {correctas}</h2>
            <button onClick={() => setIniciar(false)}>Volver</button>
          </>
           : 
           <>
              <h2 className='pregunta'>{indiceRes+1}- {pais[indiceRes].question}</h2>
              <div>{

                pais[indiceRes].answers.map((ans, i) => (
                  <div className='respuestas' key={i}>
                    <button style={indiceSeleccionado === i ? {border:"3px solid #fff"}:{border: ""}} className='btn-respuesta' disabled={checkRespuesta === "" ? false : true} onClick={() => {
                      setIndiceSeleccionado(i)
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
              <div className="continuar-flex">
                <p className={checkRespuesta === "" ? "" : checkRespuesta === "¡Correcto!" ? 'correcto' : 'falso'}>{checkRespuesta}</p>
                <button className='btn-continuar' onClick={() => {
                  if (checkRespuesta !== "") {
                    
                    setIndiceRes(indiceRes+1);
                    setCheckRespuesta("")
                    setIndiceSeleccionado(null)
                    setIntervalo(10)
                  }
                }}>Continuar</button>
              </div>

          </>
        }
    </div>
  )
}

export default Preguntas