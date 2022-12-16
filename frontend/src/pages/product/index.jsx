import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { URL_PRODUCT_EDIT } from "../../middleware/environment";
import { DeleteProduct } from "./functions/deleteProduct";
import { EditProduct } from "./functions/editProduct";
import { ShowProduct } from "./functions/showProduct";
import { CreateProduct } from "./functions/createProduct";
import { GetAllProducts } from "./functions/getAllProduct";
// import {
//   URL_PRODUCT,
//   URL_PRODUCT_CREATE,
//   URL_PRODUCT_SHOW
// } from "../../../middleware/environment";




export const Product = () => {
  return(
    <>
    <GetAllProducts />
    <EditProduct />
    <CreateProduct />
    </>


  )
}

// const URL = "https://localhost:8000/api/products";
// const {id} = useParams;

// export const Product = () => {
//   const [
//     products,
//     getProducts,
//     deleteProducts,
//     addProducts,
//     name,
//     description,
//     price,
//     addName,
//     addDescription,
//     setPrice,
//   ] = useState([]);

//   const getAllProducts = async () => {
//     await axios
//       .get(`${URL}`)
//       .then((response) => {
//         getProducts(response.data["hydra:member"]);
        // console.log(response.data["hydra:member"]);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

  // Fonction pour sélectionner les données qui devront être supprimés.
  // const deleteProduct = (id) => {
  //   const product = axios
  //     .delete(`https://localhost:8000/api/products/${id}`)
  //     .then((response) => {
  //       getAllProducts();
  //       console.log();
  //       alert("Produit supprimé");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

//   const addProduct = () => {
//     const product = axios
//       .post(`https://localhost:8000/product`, {
//         name: "",
//         description: "",
//         price: "",
//       })
//       .then((response) => {
//         console.log();
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//       });
//   };

//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   return (
//     <>
//       <h1>HELLO PRODUCT</h1>
//       <hr style={{ marginTop: "5rem" }} />
//       <form
//         action=""
//         classeName="bg-red-500"
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           width: "50%",
//           marginTop: "2rem",
//           marginBottom: "2rem",
//         }}
//       >
//         <label htmlFor="name">Nom</label>
//         <input type="text" name="name" value={name} />
//         <label htmlFor="description">Description</label>
//         <textarea name="description" rows={"10"} value={description} />
//         <label htmlFor="price">Prix</label>
//         <input type="number" value={price} />
//         <button type="submit" onClick={addProduct}>
//           Envoyer
//         </button>
//       </form>
//       <hr style={{ marginBottom: "5rem" }} />

//       {products.map((product, key) => {
//         return (
//           <div key={key}>
//             <ul>
//               <li>Nom du produit : {product.name}</li>
//               <li>Description du produit : {product.description}</li>
//               <li>Prix : {product.price} €</li>
//               <button type="submit" onClick={() => addProduct()}>
//                 Afficher le produit
//               </button>
//               <Link
//                 type="button"
//                 to={`${URL_PRODUCT_EDIT}/${product.id}`}
//                 onClick={() => updateProduct()}
//               >
//                 Modifier le produit
//               </Link>
//               {/* Permettre au bouton de valider le produit supprimé, ajouter id du produit  */}
//               <button type="button" onClick={() => DeleteProduct(product.id)}>
//                 Supprimer le produit
//               </button>
//             </ul>
//           </div>
//         );
//       })}
//     </>
//   );
// };
