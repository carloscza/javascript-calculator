import React from 'react';
import './Calculator.scss';
import { connect } from 'react-redux';

function Display(props)
{
    return (
        <div className='display'>
           <p className="expression-display">{props.expression}</p> 
           <p id="display" className='input-display'>{props.input}</p> 
        </div>
    )
}

const mapStateToProps = (state) =>
{
    return (
        {
            input: state.input,
            expression: state.expression,
            isDigitLimitMet: state.isDigitLimitMet
        }
    )
}

export default connect(mapStateToProps)(Display);