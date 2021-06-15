import React from 'react';
import './Assessment.css';

import AssessmentForm from '../../components/AssessmentForm/AssessmentForm';
import Navbar from '../../components/Navbar/Navbar';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

function Assessment () {
    return (
        <>
            <Navbar/>
            {/* <ProgressBar/> */}
            <AssessmentForm/>
        </>
    )
}

export default Assessment;