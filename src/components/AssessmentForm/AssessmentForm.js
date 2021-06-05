import React from 'react'

function AssessmentForm() {
    return (
        <div>       
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn  </p>
            <form action="#">
            <label htmlFor='op1'>
                <input id='op1' name="group1" type="radio" checked />
                <span>Option 1</span>
            </label> 
            <label htmlFor='op2'>
                <input id='op2'name="group1" type="radio" />
                <span>Option2</span>
            </label>
            <label htmlFor='op3'>
                <input id='op3'name="group1" type="radio" />
                <span>Option3</span>
            </label>
            <label htmlFor='op4'>
                <input id='op4'name="group1" type="radio" />
                <span>Option4</span>
            </label>
            <button>Next Question </button>
        </form>
        </div>
    )
}

export default AssessmentForm
