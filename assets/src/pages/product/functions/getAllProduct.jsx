import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  URL_PRODUCT,
  URL_PRODUCT_CREATE,
  URL_PRODUCT_SHOW,
  URL_PRODUCT_EDIT,
} from "../../../middleware/environment";
import DeleteProduct from "./deleteProduct";

export const GetAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  
  const getProducts = async () => {
  await axios.get(`${URL_PRODUCT}`).then((response) => {
    setAllProducts(response.data["hydra:member"]);
  })
  .catch((error) => {
    console.error(error);
  });
  };

  return (
    <>
    <h1>Liste des produits</h1>
    <Link to={`${URL_PRODUCT_CREATE}`}>Créer un produit</Link>
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Description</th>
          <th>Prix</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {allProducts.map((product, key) => {
return (
  <tr key={key}>
    <td>{product.name}</td>
    <td>{product.description}</td>
    <td>{product.price} €</td>
    <td>
      <Link to={`${URL_PRODUCT_SHOW}/${product.id}`}>Afficher</Link>
      <Link to={`${URL_PRODUCT_SHOW}/${product.id}`}>Editer</Link>
      <button onClick={() => DeleteProduct(product.id)}>Supprimer</button>
    </td>
  </tr>
)
        })}
      </tbody>
    </table>
    </>
  )

};
