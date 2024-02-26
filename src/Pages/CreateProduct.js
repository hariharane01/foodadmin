import React, { useState } from "react";
import BasicInput from "../Elements/TextFields/BasicInput";
import BasicSelect from "../Elements/Select/BasicSelect";
import { discountType } from "../constant";
import BasicRadio from "../Elements/Checks/BasicRadio";
import { Button, Container, Box, Flex } from "@chakra-ui/react";
import BasicNumberInput from "../Elements/TextFields/BasicNumberInput";

export default function CreateProduct() {
  const [data, setDate] = useState({});

  const handleInput = (e) => {
    console.log(e.target.id, e.target.value);
    let dataCopy = { ...data };

    if (e.id === "foodType" || e.id === "discountType") {
      dataCopy[e.id] = e.value;
      setDate(dataCopy);
    }
    if (e) {
      dataCopy[e.target.id] = e.target.value;
      setDate(dataCopy);
    }
  };

  return (
    <section>
      <Container>
        <Box h={2} />
        <BasicInput
          placeholder="Enter the product name "
          value={data["name"]}
          id="name"
          name="name"
          onChange={handleInput}
        />
        <Box h={2} />
        <BasicInput
          placeholder="product image "
          value={data["imageUrl"]}
          id="image"
          name="image"
          onChange={handleInput}
        />
        <Box h={2} />
        <BasicInput
          placeholder="Enter the description  "
          value={data["description"]}
          id="description"
          name="description"
          onChange={handleInput}
        />{" "}
        <Box h={2} />
       
        <BasicNumberInput  placeholder="Enter price"
          value={data["price"]}
          id="price"
          name="price"
          onChange={handleInput}/>
        <Box h={2} />
        <BasicInput
          placeholder="Enter the product discount "
          value={data["discount"]}
          id="discount"
          name="discount"
          onChange={handleInput}
        />{" "}
        <Box h={2} />
        <BasicSelect
          label="DiscountType"
          placeholder="select discount type"
          option={discountType}
          handleChange={handleInput}
          id="discountType"
          name="discountType"
          value={data["discountType"]}
        />
        <Box h={2} />
        <BasicRadio
          label="select food type"
          handleChange={handleInput}
          id="foodType"
          name="foodType"
          value={data["foodType"]}
        />
        <Box h={2} />
        <Button colorScheme="teal" variant="outline">
          Create Product
        </Button>
      </Container>
    </section>
  );
}
