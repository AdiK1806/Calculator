import styles from "./ButtonsContainer.module.css"

function buttonsContainer({onButtonClick}){
  const buttonNames=['C','/','=','+','-','*','7','8','9','4','5','6','1','2','3','0','.','<']

  return (
    <div className={styles.buttonsContainer}>
      {
      buttonNames.map(function(buttonName){
        return <button key={buttonName} onClick={()=>onButtonClick(buttonName)} className={styles.button}>{buttonName}</button>
})
}

    </div>
    );
}
export default buttonsContainer;