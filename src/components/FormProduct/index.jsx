import React from "react";

//components
import Input from "../Input";
import SelectInput from "../SelectInput";
import { categories } from "../../constants";

export default ({ product, productDispatch }) => {
  const onChange = (fieldName, value) => {
    productDispatch({
      type: "CHANGE",
      payload: { fieldName, value },
    });
  }

  const getCategories = () => {
    let array = [
      { label: "Selecionar", value: "" }
    ];

    categories.map((category) => {
      array.push({ label: category, value: category })
    });

    return array;
  }

  return (
    <>
      <Input
        editable
        label="Nome do produto *"
        textContentType="name"
        maxLength={25}
        onChangeText={(text) => onChange("title", text)}
        value={product.title}
        placeholder="Preencha com textos"
      />

      <Input
        editable
        label="Código de barras *"
        onChangeText={(text) => onChange("barcode", text)}
        value={product.barcode}
        keyboardType="numeric"
        placeholder=""
      />

      <Input
        label="Preço (R$)"
        editable
        placeholder="0,00"
        onChangeText={(num) => onChange("price", num)}
        value={product.price}
        keyboardType="numeric"
      />

      <SelectInput
        editable={true}
        mode="dialog"
        label="Categoria *"
        selectedValue={product.category}
        onValueChange={(value) => onChange('category', value)}
        items={getCategories()}
      />

      <Input
        label="Descrição"
        editable
        onChangeText={(text) => onChange("description", text)}
        value={product.description}
        multiline={true}
        numberOfLines={5}
      />
    </>
  );
};
