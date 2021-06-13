import React, {useState} from 'react';
import "../../components/AssessmentForm/Assessment.css";

function AssessmentForm() {

    const [question, setQuestion] = useState([
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
        }
    ]);

    const [numeroPregunta, setNumeroPregunta] = useState(0);

    const [preguntaSeleccionada, setPreguntaSeleccionada] = useState("");

    const [respuestas, setRespuestas] = useState([]);

    console.log(numeroPregunta);
    console.log(question[numeroPregunta]);

    const handleNextQuestion = () => {
        if(numeroPregunta < 2){
        setRespuestas((state) => [...state, preguntaSeleccionada])
        setNumeroPregunta(numeroPregunta + 1);
        }
    }

    const result = question.map((q, i) => q.answer == respuestas[i])

    console.log(preguntaSeleccionada);
    console.log(respuestas);
    console.log(result);

    return (
        <div className="container">       
            <form action="#" className="formulario">
            <p className="texto-formulario"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn  </p>
                <label htmlFor='op1' className="opciones">
                    <input id='op1' name="group1" type="radio" onClick={() => setPreguntaSeleccionada("a")} />
                    <span>{question[numeroPregunta].question1}</span>
                </label> 
                <label htmlFor='op2' className="opciones">
                    <input id='op2'name="group1" type="radio" onClick={() => setPreguntaSeleccionada("b")} />
                    <span>{question[numeroPregunta].question2}</span>
                </label>
                <label htmlFor='op3' className="opciones">
                    <input id='op3'name="group1" type="radio" onClick={() => setPreguntaSeleccionada("c")} />
                    <span>{question[numeroPregunta].question3}</span>
                </label>
                <label htmlFor='op4' className="opciones">
                    <input id='op4'name="group1" type="radio" onClick={() => setPreguntaSeleccionada("d")} />
                    <span>{question[numeroPregunta].question4}</span>
                </label>
            </form>
            <div className="btn-sgte">
                <button onClick={handleNextQuestion} className="btn-next">Next Question </button>
            </div>
        </div>
    )
}

export default AssessmentForm
