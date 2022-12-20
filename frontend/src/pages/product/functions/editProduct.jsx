import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import process from "process";


export const EditProduct = () => {
  const { id } = useParams();

  const [product, editProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });

  let formData = {
    name: product.name,
    description: product.description,
    price: product.price,
};

  const onChangeName = (event) => {
    setProduct({
      ...product,
      name: event.target.value,
    });
  };

  const onChangeDescription = (event) => {
    setProduct({
      ...product,
      name: event.target.value,
    });
  };

  const onChangePrice = (event) => {
    setProduct({
      ...product,
      name: event.target.value,
    });
  };

  
  const SubmitProduct = async (event) => {
    event.preventDefault();
    
    await axios.put(`${process.env.URL_PRODUCT_EDIT}/${id}`, formData).then((reponse) => {
      console.log(response);
    });
    
    const loadProduct = () => {
      const result = axios.get(`${process.env.URL_PRODUCT_EDIT}/${id}`);
      setProduct(result.data);
    };

    useEffect(() => {
    loadProduct();
    }, []);
    
    return (
      <>
        <h1>Editer un produit</h1>
        <form onSubmit={(event) => SubmitProduct(event)}>
          <label htmlFor="name">Nom du produit</label>
          <input
            id={"name"}
            value={product.name}
            onChange={onChangeName}
            type="text"
            name="name"
          />
          <label htmlFor="description">Description du produit</label>
          <input
            id={"description"}
            value={product.description}
            onChange={onChangeDescription}
            type="text"
            name="description"
          />
          <label htmlFor="price">Prix du produit</label>
          <input
            id={"price"}
            value={product.price}
            onChange={onChangePrice}
            type="text"
            name="price"
          />
          <Link to={`${process.env.URL_PRODUCT_ALL}/${product.id}`}></Link>
          <button type="submit" onClick={() => editProduct(product.id)}>
            Mettre à jour
          </button>
        </form>
      </>
    );
  };
};
