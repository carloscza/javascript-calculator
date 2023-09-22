import React from 'react';
import RegularButton from './RegularButton';
import { connect } from 'react-redux';
import { OPERATOR_INPUT } from './store';

function OperatorButton(props)
{
    const handleOperatorClick = () => 
    { 
        props.operatorInput(props.operatorText); 
         
    }   

    return (
        <RegularButton id={props.id} buttonText={props.operatorText} classes='operator-btn' onHandleClick={handleOperatorClick}  />    
    );
}

const operatorInputAction = (entry) =>
{
    return (
        {
            type: OPERATOR_INPUT,
            input: entry
        }
    );
}

const mapDispatchToProps = (dispatch) =>
{
    return (
        {
            operatorInput: (entry) => dispatch(operatorInputAction(entry))
        }
    );
}

export default connect(null, mapDispatchToProps)(OperatorButton);