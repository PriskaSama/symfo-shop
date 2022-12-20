import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { DeleteProduct } from "./deleteProduct";
import process from "process";


export const GetAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);


useEffect (() => {
  getProducts();
})


  const getProducts = async () => {
    await axios
      .get(`${process.env.URL_PRODUCT}`)
      .then((response) => {
        setAllProducts(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const { isAdmin } = false;

  return (
    <>
      <h1>Liste des produits</h1>
      <Link to={`${process.env.URL_PRODUCT_CREATE}`}>Créer un produit</Link>
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
                  <Link to={`${process.env.URL_PRODUCT_SHOW}/${product.id}`}>Afficher</Link>
                  <Link to={`${process.env.URL_PRODUCT_EDIT}/${product.id}`}>Editer</Link>
                  <button onClick={() => DeleteProduct(product.id)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
