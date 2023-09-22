import React from 'react';
import './Calculator.scss';

export default function HorizontalButton({id, buttonText, classes, onHandleClick})
{
    return (
        <button id={id} className={'horizontal-btn '+classes} onClick={onHandleClick}>
            {buttonText}
        </button>
    );
}