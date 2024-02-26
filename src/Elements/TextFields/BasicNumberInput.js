import React from "react";
import { Text,NumberInput,NumberInputField } from "@chakra-ui/react";

export default function BasicNumberInput({
  placeholder = "",
  value = "",
  name = "",
  id = "",
  handleChange = () => {},
  label = "",
}) {
  return (
    <>
      <Text fontsize="md" mb={3}>
        {label}
      </Text>
      <NumberInput variant='filled'>
        <NumberInputField  placeholder={placeholder} id={id} value={value} handleChange={handleChange}  />
      </NumberInput>
    </>
  );
}
