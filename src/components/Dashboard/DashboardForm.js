import React from 'react';
import '../../components/Dashboard/DashboardForm.css';

const DashboardForm = () => {
    return (
        <div className="container">
            <div className="dashboard-1">
                <p className="p1-1">Your Score</p>
                <p className="p1-2">10/10</p>
            </div>
            <div className="dashboard-2">
                <p className="p2-1">Your Score explained</p>
                <p className="p2-2">10/10</p>
                <p className="p2-3">Card layouts can vary to support the types of 
                content they contain. The following elements are 
                commonly found among that variety.</p>
            </div>
        </div>
    )
}

export default DashboardForm;
