import React from 'react'

const Field = ({label, name, type}) => {
  return (
    <>
    <label>{label}</label>
    <input id={name} name={name} type={type} />
    </>
  )
}

export default Field
