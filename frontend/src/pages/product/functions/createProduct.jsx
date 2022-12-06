import React, { useState } from "react";
import axios from "axios";

export const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });

  // faire un set product de name pour la fonction on change name
const OnchangeName = () => {

}
 
  return (
    <>
      <h1>Créer un produit</h1>
      <form onSubmit={() => SubmitProduct()}>
        <label htmlFor="name">Nom du produit</label>
        <input id={"name"} value={product.name} onChange={onChangeName} type="text" name="name" />
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
};


// event prevent default, permet de submit mais sans refresh tout le contenu de la page