import '../components/Buttons.css';

const Buttons=(props)=>{

    return(
       
   
        <div onClick={props.onclick ? props.onclick : props.resultHandler ? props.resultHandler : props.clearHandler ? props.clearHandler : props.deleteHandler } className={props.class==="Dell" ? "dell-button" : "button"}>
            {props.number}
            
        </div>
       
    )
}
export default Buttons;