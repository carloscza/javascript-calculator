import React from 'react';
import RegularButton from './RegularButton';
import { connect } from 'react-redux';
import { DECIMAL_INPUT } from './store';

function DecimalButton(props)
{
    const handleDecmimalClick = () => { props.decimalInput('.'); }
    return (
        <RegularButton id={props.id} buttonText="." classes='digit-btn' onHandleClick={handleDecmimalClick}/>
    );
}

const decimalInputAction = (decimal) =>
{
    return (
        {
            type: DECIMAL_INPUT,
            input: decimal
        }
    );
}

const mapDispatchToProps = (dispatch) => 
{
    return (
        {
            decimalInput: (decimal) => dispatch(decimalInputAction(decimal))
        }
    );
}

export default connect(null, mapDispatchToProps)(DecimalButton);