import React, { useState } from "react";
import axios from "axios";

export const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });

  // faire un set product de name pour la fonction on change name

  const OnchangeName = (event) => {
    setProduct({
      ...product,
      name: event.target.value,
    });
  };

  const OnchangeDescription = (event) => {
    setProduct({
      ...product,
      name: event.target.value,
    });
  };

  const OnchangePrice = (event) => {
    setProduct({
      ...product,
      name: event.target.value,
    });
  };

  const SubmitProduct = (event) => {
    event.preventDefault();
    
let formData = {
  name: "string",
  description: "string",
  price: 0,
};

    axios.post(`${URL_PRODUCT_CREATE}`, formData).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <h1>Créer un produit</h1>
      <form onSubmit={() => SubmitProduct()}>
        <label htmlFor="name">Nom du produit</label>
        <input
          id={"name"}
          value={product.name}
          onChange={onChangeName}
          type="text"
          name="name"
        />
        <label htmlFor="description">Description</label>
        <input
          id={"description"}
          value={product.description}
          onChange={onChangeDescription}
          type="text"
          name="name"
        />
        <label htmlFor="price">Prix</label>
        <input
          id={"price"}
          value={product.price}
          onChange={onChangePrice}
          type="text"
          name="name"
        />
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
};

// event prevent default, permet de submit mais sans refresh tout le contenu de la page
