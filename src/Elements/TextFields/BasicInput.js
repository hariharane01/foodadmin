import { Input } from '@chakra-ui/react'
import React from 'react'

export default function BasicInput({ placeholder='',value="",id=" ", name='', onChange=()=>{} }) {
  return (
    <Input variant='filled' placeholder={placeholder} value={value} name={name} id={id} onChange={onChange}  />
  )
}
