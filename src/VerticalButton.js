import React from 'react';
import './Calculator.scss';

export default function VerticallButton({id, buttonText, classes, onHandleClick })
{
    return (
        <button id={id} className={'vertical-btn '+classes} onClick={onHandleClick}>
            {buttonText}
        </button>
    );
}