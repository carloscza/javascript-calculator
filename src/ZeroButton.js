import React from 'react';
import HorizontalButton from './HorizontalButton';
import { connect } from 'react-redux';
import { DIGIT_INPUT} from './store';


function ZeroButton(props)
{
    const handleZeroInput = () => { props.zeroInput(props.digitText); }
    return (
       <HorizontalButton id={props.id} buttonText={props.digitText} classes='digit-btn' onHandleClick={handleZeroInput}/> 
    );
}

const zeroInputAction = (digitValue) =>
{
    return (
        {
            type: DIGIT_INPUT,
            input: digitValue
        }
    )
}

const mapDispatchToProps = (dispatch) =>
{
    return (
        {
            zeroInput: (zeroInput) => dispatch(zeroInputAction(zeroInput))
        }
    );
}

export default connect(null, mapDispatchToProps)(ZeroButton);