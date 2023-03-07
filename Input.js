import '../components/Input.css';
import React from 'react';
const Input=(props)=>{
    return(
<div className='input-wrapper'>
<div className='result'>
   
<h2>{props.showResult}</h2>
</div>
<div className='text'>
<h4>{props.showExpression ? props.showExpression : 0}</h4>
</div>

 </div>
    )
}
export default Input;