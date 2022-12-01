import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const URL = "https://localhost:8000/api/products";
const {id}=useParams;

export const Product = () => {
  const [products, getProducts, deleteProducts] = useState([]);

  const getAllProducts = async () => {
    await axios
      .get(`${URL}`)
      .then((response) => {
        getProducts(response.data["hydra:member"]);
        // console.log(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.error(error);
      });
      alert 
  };

  // fonction pour sélectionner les données qui devront être supprimés.
  const deleteProduct = (id) => {
    const product = axios
      .delete(`https://localhost:8000/api/products/${id}`)
      .then((response) => {
        getAllProducts();
        console.log();
      })
      .catch((error) => {
        console.error(error);
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
        <label htmlFor="name">Nom du produit :</label>
        <input type="text" name="name" />
        <label htmlFor="description"> Description du produit :</label>
        <textarea name="description" rows={"10"} />
        <label htmlFor="price">Prix :</label>
        <input type="number" />
        <button type="button" onClick={() => submitForm()}>
          Envoyer
        </button>
      </form>
      <hr style={{ marginBottom: "5rem" }} />


      {products.map((product) => {

        return (
          <div key={product.id}>
            <ul>
              <li>Nom du produit : {product.name}</li>
              <li>Description du produit : {product.description}</li>
              <li>Prix : {product.price} €</li>
              <button type="button" onClick={() => addProduct()}>
                Ajouter au panier
              </button>
              <button type="button" onClick={() => updateProduct()}>
                Modifier le produit
              </button>
              {/* Permettre au bouton de valider le produit supprimé, ajouter id du produit  */}
              <button type="button" onClick={() => deleteProduct(product.id)}>  
                Supprimer le produit
              </button>
            </ul>
          </div>
        );
      })}
    </>
  );
};
