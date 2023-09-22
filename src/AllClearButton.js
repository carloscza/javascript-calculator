import React from 'react';
import HorizontalButton from './HorizontalButton';
import { connect } from 'react-redux';

function AllClearButton(props)
{
    const handleClearClick = () => props.clear();

    return (
        <HorizontalButton id={props.id} buttonText='AC' classes="ac-btn" onHandleClick={handleClearClick} />
    );
}

const clearAction = () =>
{
    return (
        {
            type: 'ALL_CLEAR'
        }
    );
}

const mapDispatchToProps = (dispatch) =>
{
    return (
        {
            clear: () => dispatch(clearAction())
        }
    );
}

export default connect(null, mapDispatchToProps)(AllClearButton);


