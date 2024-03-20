import styles  from "./App.module.css"
import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import { useState } from "react";

function App() {
  let [calVal,setCalVal]=useState("AC");

  function onButtonClick(buttonText){

    if(buttonText==='C'){
      setCalVal("AC");
    }else if(buttonText==='='){
      setCalVal(eval(calVal));
    }else if(buttonText=='<'){
      if(calVal.length>0 && calVal !="AC"){
        let newCalVal=calVal.slice(0,-1);
        if(newCalVal.length==0){
          setCalVal("AC");
        }
        else{
          setCalVal(newCalVal)
        }
      }
    }
    else{
      let newDisplayValue;
      if(calVal=='AC'){
        newDisplayValue=buttonText;
      }
      else{
        newDisplayValue=calVal+buttonText;
      }
      setCalVal(newDisplayValue);
    }
  }


  return(<>
    <h1>Calculator</h1>
    <div className={styles.calculator}>
      
      <Display displayVal={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}/>
    </div>
    </>
  );
}

export default App
