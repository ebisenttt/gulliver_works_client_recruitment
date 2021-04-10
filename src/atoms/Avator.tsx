import React from "react"
import defaultAvator from "./avatorDefault.png"

const sizeSelector = (size: string): string => {
  if (size == 'small') return '32px'
  else if(size == "medium")return '48px'
  else return '120px'
}

const styleGenerator = (size: string): { [key: string]: string }  => ({
  width: sizeSelector(size),
  height: sizeSelector(size)
})

type Props = {
  avator?: string;
  size: string;
}

const Avator = (props: Props) => {
  return (
    <img src={props.avator} style={styleGenerator(props.size)} />
  )
}

Avator.defaultProps = {
  avator: defaultAvator
}

export default Avator;