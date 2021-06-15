import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import "../../components/AssessmentForm/Assessment.css";

function AssessmentForm() {

    const history = useHistory();

    const [questions, setQuestion] = useState([
        {
            question1: "A",
            question2: "B",
            question3: "C",
            question4: "D",
            answer: "a"
        },
        {
            question1: "a",
            question2: "b",
            question3: "c",
            question4: "d",
            answer: "b"
        },
        {
            question1: "a",
            question2: "b",
            question3: "c",
            question4: "d",
            answer: "c"
        },
        {
            question1: "1",
            question2: "2",
            question3: "3",
            question4: "4",
            answer: "c"
        }
    ]);

    const [numeroPregunta, setNumeroPregunta] = useState(0);

    const [preguntaSeleccionada, setPreguntaSeleccionada] = useState("");

    const [respuestas, setRespuestas] = useState([]);

    console.log("Nro pregunta: ", numeroPregunta);
    console.log(questions[numeroPregunta]);

    const handleNextQuestion = () => {
        if(numeroPregunta >= questions.length -1){
            history.push("/dashboard");
        }else{
            setRespuestas((state) => [...state, preguntaSeleccionada])
            setNumeroPregunta(numeroPregunta + 1);
        }
    }

    const result = questions.map((q, i) => q.answer == respuestas[i])

    console.log("Pregunta Selec. :", preguntaSeleccionada);
    console.log("Respuesta :", respuestas);
    console.log("Resultado: ", result);

    const respuestasCorrectas = result.filter((r) => r == true)
    const numeroRespuestasCorrectas = respuestasCorrectas.length
    console.log("Respuestas correctas: " + numeroRespuestasCorrectas + "/" + numeroPregunta);

    return (
        <div className="container">
            <form action="#" className="formulario">
            <p className="texto-formulario"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn  </p>
                <label htmlFor='op1' className="opciones">
                    <input id='op1' name="group1" type="radio" onClick={() => setPreguntaSeleccionada("a")} />
                    <span>{questions[numeroPregunta].question1}</span>
                </label> 
                <label htmlFor='op2' className="opciones">
                    <input id='op2'name="group1" type="radio" onClick={() => setPreguntaSeleccionada("b")} />
                    <span>{questions[numeroPregunta].question2}</span>
                </label>
                <label htmlFor='op3' className="opciones">
                    <input id='op3'name="group1" type="radio" onClick={() => setPreguntaSeleccionada("c")} />
                    <span>{questions[numeroPregunta].question3}</span>
                </label>
                <label htmlFor='op4' className="opciones">
                    <input id='op4'name="group1" type="radio" onClick={() => setPreguntaSeleccionada("d")} />
                    <span>{questions[numeroPregunta].question4}</span>
                </label>
            </form>
            <div className="btn-sgte">
                <button onClick={handleNextQuestion} className="btn-next">Next Question </button>
            </div>
        </div>
    )
}

export default AssessmentForm
