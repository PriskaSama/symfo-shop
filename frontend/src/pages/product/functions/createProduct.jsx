import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  URL_PRODUCT,
  URL_PRODUCT_CREATE,
  URL_PRODUCT_SHOW,
  URL_PRODUCT_EDIT,
  URL_PRODUCT_ALL,
} from "../../../middleware/environment";

export const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });

  // faire un set product de name pour la fonction On Change name

  const onChangeName = (event) => {
    setProduct({
      ...product,
      name: event.target.value,
    });
  };

  const onChangeDescription = (event) => {
    setProduct({
        ...product,
        description: event.target.value,
    });
};

  const onChangePrice = (event) => {
    setProduct({
        ...product,
        price: parseFloat(event.target.value),
    });
};

  const SubmitProduct = (event) => {
    event.preventDefault();
    
    let formData = {
      name: product.name,
      description: product.description,
      price: product.price,
  };

    axios.post(`${URL_PRODUCT_CREATE}`, formData).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <h1>Créer un produit</h1>
      <form onSubmit={(event) => SubmitProduct(event)}>
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
        <Link to={`${URL_PRODUCT_ALL}/${product.id}`}>Voir tous les produits</Link>
        <button type="submit" onClick={() => CreateProduct(product.id)}>Envoyer</button>
      </form>
    </>
  );
};

// Event Prevent Default, permet de submit mais sans refresh tout le contenu de la page

