import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import "../../components/AssessmentForm/Assessment.css";
import dataList from '../../service/question.json';

//Importar el json
// Hacer un useEffect que llene el state
// El estado inicial lo defino como vacío, como un objeto en blanco

function AssessmentForm() {

    const history = useHistory();

    useEffect(() => {
        setQuestions(dataList)
        console.log("Preguntas: ", dataList);
    }, [])

    const [questions, setQuestions] = useState([
        {
            id: 1,
            questions: "",
            question1: "",
            question2: "",
            question3: "",
            question4: "",
            answer: ""
        }
    ]);

    const [numeroPregunta, setNumeroPregunta] = useState(0);

    const [preguntaSeleccionada, setPreguntaSeleccionada] = useState("");

    const [respuestas, setRespuestas] = useState([]);

    const handleNextQuestion = () => {
        if(numeroPregunta >= questions.length -1){
            history.push("/dashboard");
        }else{
            setRespuestas((state) => [...state, preguntaSeleccionada])
            setNumeroPregunta(numeroPregunta + 1);
        }
    }

    const result = questions.map((q, i) => q.answer == respuestas[i])

    const respuestasCorrectas = result.filter((r) => r == true)
    const numeroRespuestasCorrectas = respuestasCorrectas.length

    return (
        <div className="container">
            <form action="#" className="formulario">
                <p className="texto-formulario">{questions[numeroPregunta].questions}</p>
                <label htmlFor='op1' className="opciones">
                    <input id="op1" name="group1" type="radio" onClick={() => setPreguntaSeleccionada(questions[numeroPregunta].question1)} />
                    <span>{questions[numeroPregunta].question1}</span>
                </label> 
                <label htmlFor='op2' className="opciones">
                    <input id='op2'name="group1" type="radio" onClick={() => setPreguntaSeleccionada(questions[numeroPregunta].question2)} />
                    <span>{questions[numeroPregunta].question2}</span>
                </label>
                <label htmlFor='op3' className="opciones">
                    <input id='op3'name="group1" type="radio" onClick={() => setPreguntaSeleccionada(questions[numeroPregunta].question3)} />
                    <span>{questions[numeroPregunta].question3}</span>
                </label>
                <label htmlFor='op4' className="opciones">
                    <input id='op4'name="group1" type="radio" onClick={() => setPreguntaSeleccionada(questions[numeroPregunta].question4)} />
                    <span>{questions[numeroPregunta].question4}</span>
                </label>
            </form>
            <div className="btn-sgte">
                <button onClick={handleNextQuestion} className="btn-next">Next question</button>
            </div>
        </div>
    )
}

export default AssessmentForm
