import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const URL = "https://localhost:8000/api/products";
const { id } = useParams;

export const Product = () => {
  const [products, getProducts, deleteProducts, addProducts, name, description, price, setName, setDescription, setPrice] = useState([]);

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
  };

  // fonction pour sélectionner les données qui devront être supprimés.
  const deleteProduct = (id) => {
    const product = axios
      .delete(`https://localhost:8000/api/products/${id}`)
      .then((response) => {
        getAllProducts();
        console.log();
        alert("Produit supprimé");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addProduct = (id, name, description, price) => {
    const product = axios
    .post(`https://localhost:8000/product`, `${id}`, `${name, description, price}`)
    .then((response) => {
      postProduct(response.data.name, response.data.description, response.data.price)
      console.log();
      alert("Produit ajouté");
    })
    .catch((error) => {
      console.error(error);
    })
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
        <label htmlFor="name" >Nom</label>
        <input type="text" name="name" value={nom}/>
        <label htmlFor="description" > Description</label>
        <textarea name="description" rows={"10"} value={description}/>
        <label htmlFor="price" >Prix</label>
        <input type="number" value={prix}/>
        <button type="submit" onClick={() => addProduct()}>
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
              <button type="submit" onClick={() => addProduct()}>
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
