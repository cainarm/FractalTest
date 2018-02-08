import React from 'react';
import './style.scss';

const Spinner = (props) => {
    return (
        <div className="spinner-container">
            <span {...props} className="spinner"/>
        </div>
    );
};

export default Spinner;