import React from 'react';
import VerticalButton from './VerticalButton';
import './Calculator.scss';
import { connect } from 'react-redux';
import { CALCULATE } from './store';

function EqualsButton(props)
{
    const handleEqualsClicked = () => { props.equals(); }
     return (
        <VerticalButton id={props.id} buttonText='=' classes="equals-btn" onHandleClick={handleEqualsClicked}/>
    );
}

const equalsAction = () =>
{
    return (
        {
            type: CALCULATE
        }
    );
}

const mapDispatchToProps = (dispatch) => 
{
    return (
        {
             equals: () => dispatch(equalsAction())
        }
    ); 
}

export default connect(null, mapDispatchToProps)(EqualsButton);