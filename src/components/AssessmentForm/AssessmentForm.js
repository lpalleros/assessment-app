import React from 'react';
import "../../components/AssessmentForm/Assessment.css";

function AssessmentForm() {
    return (
        <div className="container">       
            <p className="texto-formulario"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn  </p>
            <form action="#" className="formulario">
                <label htmlFor='op1' className="opciones">
                    <input id='op1' name="group1" type="radio" checked />
                    <span>Option 1</span>
                </label> 
                <label htmlFor='op2' className="opciones">
                    <input id='op2'name="group1" type="radio" />
                    <span>Option2</span>
                </label>
                <label htmlFor='op3' className="opciones">
                    <input id='op3'name="group1" type="radio" />
                    <span>Option3</span>
                </label>
                <label htmlFor='op4' className="opciones">
                    <input id='op4'name="group1" type="radio" />
                    <span>Option4</span>
                </label>
                <div className="btn-sgte">
                    <button className="btn-next">Next Question </button>
                </div>
            </form>
        </div>
    )
}

export default AssessmentForm
