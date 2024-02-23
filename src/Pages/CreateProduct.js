import React, { useState } from "react";
import BasicInput from "../Elements/TextFields/BasicInput";

export default function CreateProduct() {
  const [data, setDate] = useState({});

  const handleInput = (e) => {
    if (e) {
      let dataCopy = { ...data };
      dataCopy[e.target.id] = e.target.value;
      setDate(dataCopy);
    }
  };

  return (
    <section>
      <BasicInput
        placeholder="Enter the product name "
        value={data["name"]}
        id="name"
        name="name"
        onChange={handleInput}
      />
       <BasicInput
        placeholder="Enter the description  "
        value={data["description"]}
        id="description"
        name="description"
        onChange={handleInput}
      /> <BasicInput
      placeholder="Enter price"
      value={data["price"]}
      id="price"
      name="price"
      onChange={handleInput}

    />
     <BasicInput
        placeholder="Enter the product discount "
        value={data["discount"]}
        id="discount"
        name="discount"
        onChange={handleInput}
      />
    </section>
  );
}
