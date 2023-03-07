import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Input from './components/Input';
function App() {
const [display,setDisplay]=useState("0");
const [expression,setExpression]=useState(["0"]);


const showResult=(value)=>{
  setDisplay(value);
  if(expression[0]==="0"){
    expression.shift();
      }
  setExpression([...expression,value])
}

const handleResult=()=>{

  const result=expression.join("")
.split(/(\D)/g)
.map(value=>(value.match(/\d/g) ? parseInt(value,0) : value))
.reduce((acc,value,index,array)=>{
  switch(value){
    case "+":
      return (acc=acc + array [index+1]);
       case "-":
      return (acc=acc - array [index+1]);
       case "*":
      return (acc=acc * array [index+1]);
       case "/":
      return (acc=acc / array [index+1]);
       default:
       return acc;
  
  }
})
setDisplay(result)
setExpression("")
}

const clearResult=()=>{
  setDisplay("0");
  setExpression("")
}

const backSpace=()=>{

  if(!expression[0]){
    setExpression("")
    setDisplay("0")
   
  }else{
    setExpression(expression.slice(0,-1))
  }
  
 
}

  return (
    <div className="App">

 <div className='calculator'>

<Input showResult={display} showExpression={expression} />

<div className='keys-dell'>
<Buttons number="Dell" class="Dell" deleteHandler={backSpace}/>
</div>
<div className='keys'>
<Buttons number="-" onclick={()=>showResult("-")} />
<Buttons number="+" onclick={()=>showResult("+")} />
<Buttons number="*" onclick={()=>showResult("*")}/>
<Buttons number="/" onclick={()=>showResult("/")}/>
<Buttons number="7" onclick={()=>showResult("7")}/>
<Buttons number="8" onclick={()=>showResult("8")}/>
<Buttons number="9" onclick={()=>showResult("9")}/>
<Buttons number="4" onclick={()=>showResult("4")}/>
<Buttons number="5" onclick={()=>showResult("5")}/>
<Buttons number="6" onclick={()=>showResult("6")}/>
<Buttons number="1" onclick={()=>showResult("1")}/>
<Buttons number="2" onclick={()=>showResult("2")}/>
<Buttons number="3" onclick={()=>showResult("3")}/>
<Buttons number="0" onclick={()=>showResult("0")}/>
<Buttons number="." onclick={()=>showResult(".")}/>
<Buttons number="C" clearHandler={clearResult}/>
<Buttons number="=" resultHandler={handleResult} />

</div>
 </div>

    </div>
  );
}

export default App;
