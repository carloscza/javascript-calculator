import React from 'react';
import './Calculator.scss';

export default function RegularButton({id, buttonText, classes, onHandleClick})
{
    return (
        <button id={id} className={"regular-btn " + classes} onClick={onHandleClick}>
            {buttonText}
        </button>
    );
}