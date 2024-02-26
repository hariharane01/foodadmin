import React from "react";
import { Radio, RadioGroup, Stack,Text  } from "@chakra-ui/react";

export default function BasicRadio({
  handleChange = () => {},
  value = "",
  id = "",
  name = "",
  label = "",
}) {
  return (
    <>
    <Text fontsize='md'>{label}</Text>
     <RadioGroup
      onChange={(e) =>
        handleChange({
          target: {
            value: e,
            id: id,
          },
        })
      }
      value={value}
      id={id}
      name={name}
    >
      <Stack direction="row">
        <Radio value="1">Veg</Radio>
        <Radio value="2">Non-veg</Radio>
      </Stack>
    </RadioGroup>
    </>
   
  );
}
