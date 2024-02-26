import React from "react";
import { Select } from "@chakra-ui/react";

export default function BasicSelect({
  placeholder = "",
  handleChange = () => {},
  option = [],
  id='',
  value='',
  label='',
}) {
  return (
    <Select id={id} placeholder={placeholder} onChange={(o)=>handleChange(o)} value={value} variant='filled' >
      {option.length > 0 &&
        option.map((o, i) => <option key={i} value={o.value}> {o.label} </option>)}
    </Select>
  );
}
