import React, { forwardRef, useEffect, useState } from "react"

interface RadioCardGroupProps {
  children?: React.ReactNode
}

interface RadioCardItemProps {
  value: string
  children?: React.ReactNode
  defaultClass: string
  checkedClass: string
  uncheckedClass: string
}

const RadioCard = {
  Group: forwardRef<HTMLDivElement, RadioCardGroupProps>((props, ref) => {
    return (
      <div onClick={(e: React.MouseEvent)=>{
        console.log(RadioCard.Value)
      }}>
        {props.children}
      </div>
    )
  }),
  Item: ({value, children, defaultClass, checkedClass, uncheckedClass}: RadioCardItemProps) => {

    const [cardChecked, checkCard] = useState(false)

    function setCardState() {
      if (RadioCard.Value === value) {
        checkCard(true)
      } else {
        checkCard(false)
      }
    }

    useEffect(()=>{
      setCardState()
      document.addEventListener("click",()=>{
        setCardState()
      })
    })
    
    return (
      <div
        className={`
          radioCard
          select-none
          ${defaultClass}
          ${
            cardChecked
            ?
            checkedClass
            :
            uncheckedClass
          }
        `}
        id={value}
        onClick={(e: React.MouseEvent)=>{
          RadioCard.Value = value
        }}>
        {children}
      </div>
    )
  },
  Value: ""
}


export { RadioCard }