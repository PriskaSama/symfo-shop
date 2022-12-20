import React, { useEffect, useState } from "react";
import axios from "axios";
import process from "process";
import { useParams } from "react-router-dom";

const ShowProduct = () => {

    // const [id, getId] = useParams().id;

    const [product, getProduct] = useState({
        id: useParams().id,
        name: "",
        description: "",
        price: 0,
    });

    useEffect(() => {
        axios.get(`${process.env.URL_PRODUCT}/${product.id}`)
        .then((response) => {
            console.log(response.data);
            getProduct(response.data);
        }).catch((err) => {
            console.error(err);
        });
    }, [])


    return (
        <>
            {product.name}
            {product.description}
            {product.price}
        </>
    )
};

export default ShowProduct;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import PropTypes  from "prop-types";

// import { URL_PRODUCT_SHOW, URL_PRODUCT } from "../../../middleware/environment";
// import { useParams } from "react-router-dom";

// const ShowProduct = () => {
//   // const [id, getId] = useParams().id;

//   const [product, getProduct] = useState({
//     id: useParams().id,
//     name: "",
//     description: "",
//     price: 0,
//   });

//   useEffect(() => {

//     axios.get(
//       `${URL_PRODUCT}/${product.id}`)
//       .then((response) => {
//        (console.log(response.data));
//       getProduct(response.data);
//       })
//       .catch((err) => {console.error(err);
//     });
      
//   },[]);
// return (
//   <>
//   <h1>Vous etes entrain d'afficher le produit {product.name}</h1>
//     <br />
//     nom :
//     {product.name}
//     <br />
//     description :
//     {product.description}
//     <br />
//     prix :
//     {product.price}
//     €
//   </>
// )
// };


// export default ShowProduct;