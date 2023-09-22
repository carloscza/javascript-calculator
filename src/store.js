import { createStore } from 'redux';

export const CALCULATE = 'CALCULATE';
export const ALL_CLEAR = 'ALL_CLEAR';
export const DIGIT_INPUT = 'DIGIT_INPUT';
export const OPERATOR_INPUT = 'OPERATOR_INPUT';
export const DECIMAL_INPUT = 'DECIMAL_INPUT';

const initialState = 
{
    input: '0',
    isNew: true,
    expression: [],
    isNegative: false,
    isPrevAnOperator: false,
    isDecimal: false,
    isDigitLimitMet: false,
    isEvaluated: false
}

const rootReducer = (state = initialState, action) =>
{
    let newState = {...state};
    switch(action.type)
    {
        case DIGIT_INPUT:
            if ( !state.isDigitLimitMet)
            {
                if ( state.isNew || (state.input === '0' && state.expression.length === 1) )
                {
                    newState = {...newState, isNew: false, input: action.input, expression: [action.input]};
                }
                else
                {
                    if (state.isPrevAnOperator)
                    {
                        newState = {...newState, input: action.input};
                    }
                    else
                    {
                        newState = {...newState, input: state.input + action.input};
                    }

                    if ( state.isNegative)
                    {
                        newState = {...newState, expression: [...state.expression.slice(0,-1), state.expression[state.expression.length-1] + action.input]};
                    }
                    else if ( state.isEvaluated )
                    {
                        newState = {...initialState, isNew: false, input: action.input, expression: [action.input]}
                    }
                    else
                    {
                        newState = {...newState, expression: [...state.expression, action.input]};
                    }
                }
                newState = {...newState, isDigitLimitMet: state.input.length > 19 ? true: false, isEvaluated: false, isNegative: false, isPrevAnOperator: false};
            }
            break;
        case DECIMAL_INPUT:
            if ( state.isNew)
            {
                newState = {...newState, isNew: false, input: '0' + action.input, expression: ['0' + action.input]};
            }
            else
            {
                if (!state.isDecimal)
                {
                    if ( state.isPrevAnOperator)
                    {
                        newState = {...newState, input: '0' + action.input, expression: [...state.expression, '0'+action.input]};
                    
                    }
                    else if ( state.isEvaluated )
                    {
                        newState = {...initialState, isNew: false, input: action.input, expression: ['0'+action.input]};
                    }
                    else
                    {
                        newState = {...newState, input: state.input + action.input, expression: [...state.expression, action.input]};
                    }
                }
            }
            newState = {...newState, isEvaluated: false, isDecimal: true, isNegative: false, isPrevAnOperator: false};
            break;
        case OPERATOR_INPUT:
            if ( state.isNew )
            {
                if ( action.input === '- ')
                {
                    newState = {...newState, isNew: false, isNegative: true, expression: [action.input]};
                }
                else
                {
                    newState = {...newState, isNew: false, expression: [action.input]};
                }
            }
            else if ( state.isEvaluated)
                {
                    newState = {...newState, expression: [state.expression[state.expression.length-1], action.input]};
                }
            else
            {
                if (!state.isPrevAnOperator)
                {
                    newState = {...newState, isNew: false, expression: [...state.expression, action.input]};
                }
                
                else
                {
                    if ( action.input === '-' )
                    {
                        if ( !state.isNegative && state.expression.length > 1)
                        {
                            newState = {...newState, isNegative: true, expression: [...state.expression, action.input]};
                        }
                        else if ( !state.isNegative && state.expression.length === 1)
                        {
                            newState = {...newState, isNegative: true, expression: [action.input]};
                        }
                    }
                    else
                    {
                        if (!state.isNegative)
                        {
                            newState = {...newState, expression: [...state.expression.slice(0,-1), action.input]};
                        }
                        else
                        {
                            newState = {...newState, isNegative: false, expression: [...state.expression.slice(0,-2), action.input]};
                        }
                    }
                }
            }
            newState = {...newState, isDigitLimitMet: false, isEvaluated: false, isPrevAnOperator: true, input: action.input, isDecimal: false};
            break;
        case CALCULATE:
            if ( !/^[+*/]+/.test(state.expression.join('')) )
            {
                const expressionStr = state.expression.join("").replace(/[+\-*/]+$/, "");
                const answer = eval(expressionStr.replace(/--/g, "+"));
                newState = {...newState, isEvaluated: true, isPrevAnOperator: false, isDecimala: false, input: answer, expression: [...expressionStr, "=", answer]};
            }
            break;
        case ALL_CLEAR:
            newState = {...initialState};
            break;
        default:
    }
    return newState;
}

const store = createStore(rootReducer);

export default store;