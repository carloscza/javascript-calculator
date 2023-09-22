import './Calculator.scss';
import React from 'react';
import RegularButton from './RegularButton';
import { connect } from 'react-redux';
import { digitInputAction } from './actionCreators';

function DigitButton(props)
{
    const handleDigitClick = () => 
    {  
        props.digitInput(props.digitText);
         
    }

    return (
        <RegularButton id={props.id} classes='digit-btn' buttonText={props.digitText} onHandleClick={handleDigitClick}/>
    );
}

const mapDispatchToProps = (dispatch) =>
{
    return (
        {
            digitInput: (newEntry) => dispatch(digitInputAction(newEntry))
        }
    );
}

export default connect(null, mapDispatchToProps)(DigitButton);