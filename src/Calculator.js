import React from 'react';
import "./Calculator.scss";
import Display from './Display';
import AllClearButton from './AllClearButton';
import DigitButton from './DigitButton';
import ZeroButton from './ZeroButton';
import DecimalButton from './DecimalButton';
import OperatorButton from './OperatorButton';
import EqualsButton from './EqualsButton';

export default function Calculator()
{
    return (
        <section id="calculator" className="calculator-container inline" role="region" aria-labelledby='calculator'>
            <Display />
            <div className='buttons-container'>
                <div className='btn-region-1'>
                    <AllClearButton id='clear'/>
                    <DigitButton id='seven' digitText='7' />
                    <DigitButton id="eight" digitText='8' />
                    <DigitButton id="four"  digitText='4' />
                    <DigitButton id="five"  digitText='5' />
                    <DigitButton id="one"   digitText='1' />
                    <DigitButton id="two"   digitText='2' />
                    <ZeroButton  id='zero'  digitText='0' />
                </div>
                <div className='btn-region-2'>
                    <OperatorButton id="divide" operatorText="/" />
                    <DigitButton    id="nine"   digitText='9'    />
                    <DigitButton    id="six"    digitText='6'    />
                    <DigitButton    id="three"  digitText='3'    />
                    <DecimalButton  id="decimal" />
                </div>
                <div className='btn-region-2'>
                    <OperatorButton id="multiply" operatorText="*" />
                    <OperatorButton id="subtract" operatorText="-" />
                    <OperatorButton id="add"      operatorText="+" />
                    <EqualsButton id="equals" />
                </div>
            </div>
            
        </section>
    )
}