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
  Item: forwardRef<HTMLLabelElement, RadioCardItemProps>((props, ref) => {

    const radio = document.getElementById(props.value)

    useEffect(() => {
      console.log(radio?.hasAttribute('checked'))
    })

    return (
      <label className={`
        radioCard
        ${radio?.hasAttribute('checked') ? 'bg-blue-300' : 'bg-rose-500'}
      `} ref={ref}>
        <input type="radio" value={props.value} id={prop.value} className="scale-0" />
        <span>{props.children}</span>
      </label>
    )
  })
}


export { RadioCard }
