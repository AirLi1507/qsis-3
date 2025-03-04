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
  Item: ({value, children, defaultClass, checkedClass, uncheckedClass}: RadioCardItemProps) => {
    return (
      <label>
        <input type="radio" />
      </label>
    )
  }
}


export { RadioCard }
