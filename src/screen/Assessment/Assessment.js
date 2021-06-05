import React from 'react';
import './Assessment.css';

import AssessmentForm from '../../components/AssessmentForm/AssessmentForm';
import Navbar from '../../components/Navbar/Navbar';

function Assessment () {
    return (
        <>
            <Navbar/> 
            <AssessmentForm/>
        </>
    )
}

export default Assessment;