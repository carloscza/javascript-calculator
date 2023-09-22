import "./App.css";
import Calculator from "./Calculator";

function App() 
{
  return (
      <main className="App">
        <Calculator />
      </main>
  );
}

export default App;






///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////


let p = [];
let input = "*+-+99..+---*-*--*-+--///////--8+--.---*-";
let isNegative = false;
let isTopOperator = false;
let isDecimal = false;

console.log("INPUT: " + input);
for (let i = 0; i < input.length; i++) 
{
  let char = input.at(i);


    
  // Input character is an operator. Need set up before inserting operator.
  if (char === "*" || char === "/" || char === "+" || char === "-")
  {


    // The previous input character was a operator therefore need to deterimine
    // if user is getting ready to insert a negative number or changing operation.
    if (isTopOperator)
    {
      // A negative number.
      if (char === "-" && p.length > 2)
      {
        if (!isNegative)
          isNegative =true;
        else
          p.pop();
      }
      else // Not a negative number. User wants to change operation.
      {
        p.pop();
        if (isNegative) // Remove negative symbol if any and reset.
        {
          p.pop();
          isNegative = false;
        }
      }
    }

    
    isTopOperator = true;
    isDecimal = false;


  }





  else // Input character is a number.
  {
    isNegative = false;
    isTopOperator = false;
  }

  // If initially user is entering a negative number.
  if ( char === '-' && p.length === 0)
  {
    isNegative = true;
  }

  // User is entering a decimal number. And disable ability to input
  // multiple decimals per number input.
  if ( char === '.' )
  {
    if(!isDecimal)
      isDecimal =true;
    else
      p.pop();
  }

  p.push(char);
}


console.log("OUTPUT: " + p.join(""));