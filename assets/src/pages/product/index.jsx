import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL_PRODUCT } from "";

const URL = "http://localhost:8000/api/products";

export const Product = () => {
  const [products, getProducrs] = useState([]);

  const getAllProducts = async () => {
    await axios
      .get(`${URL}`)
      .then((response) => {
        getAllProducts(response.date["hydra:member"]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <h1>HELLO PRODUCT</h1>
      <hr style={{ marginTop: "5rem" }} />
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <label htmlFor="name">Nom du produuit :</label>
        <input type="text" name="name" />
        <label htmlFor="description"> Description du produit :</label>
        <textarea name="description" rows={"10"} />
        <label htmlFor="price">Prix :</label>
        <input type="number" />
        <button type="button" onClick={() => submitForm()}>Envoyer</button>
      </form>
      <hr style={{ marginBottom: "5rem" }} />
      {products.map((product) => {
        const addProduct = () => {
          alert(`Produit ajouté : ${product.id}`);
        };
        const updateProduct = () => {
          alert(`Produit mis à jour : ${product.id}`);
        };
        const deleteProduct = () => {
          alert('Produit supprimé: ${product.id}')
        }
      })}
      
      {getAllProducts.map((product) => {
        const getId = () => {
          alert("Votre id : ${product.id}");
        };
        return (
          <div key={product.id}>
            <ul>
              <li>Nom du produit : {product.name}</li>
              <li>Description du produit : {product.description}</li>
              <li>Prix : {product.price} €</li>
            </ul>
            <button onClick={() => addProduct()}>Ajouter au panier</button>
            <button onClick={() => updateProduct()}>Supprimer le produit</button>
            <button onClick={() => deleteProduct()}>Supprimer le produit</button>
          </div>
        );
      })}
    </>
  );
};
