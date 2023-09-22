import { DIGIT_INPUT } from "./store";

export const digitInputAction = (newDigitEntry) =>
{
    return (
        {
            type: DIGIT_INPUT,
            input: newDigitEntry
        }
    );
}

export function priority(operator)
{
    if ( operator === 'x' || operator === '/')
    {
        return 2;
    }
    else
    {
        return 1;
    }
}