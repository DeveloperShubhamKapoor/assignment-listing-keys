import React from 'react'
import styles from "./card.module.css" 

const Card = ({date,logo,casestudy,heading,subheading,devices,color}) => {
  return (
    <div style ={{backgroundColor:color}} className = {styles.mainDivSet}>
      <div>
        <div className={styles.setDateLogo}>
            <div>{date}</div> 
            <img className={styles.setLogo} src={logo} alt="amazon logo" />
        </div>
        <div className={styles.setCaseDiv}>{casestudy}</div>
        <h1>{heading}</h1>
        <h1>{subheading}</h1>
        <div style={{fontSize: "18px"}}>{devices}</div>
      </div>
    </div>
  )
}

export default Card