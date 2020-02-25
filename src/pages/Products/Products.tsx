import React, { FC, useState, useEffect } from 'react';

import FormProduct from './FormProduct';
import { useCart } from "../../providers/Cart";

const Products: FC<{}> = () => {

  const [products, setProducts] = useState([]);

  const { _, dispatch } = useCart();

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => console.error(error));
  }, [])

  const handleChange = (product) => {

    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...product })
    })
  }

  const addToCart = (id, amount) => {
    dispatch({ type: 'ADD', product: { id, amount } })
  }

  return (
    <>
      {products && products.length > 0 && (
        products.map((product, index) => <FormProduct key={index} product={product} handleChange={handleChange} addToCart={addToCart} />)
      )}
    </>
  )
}

export default Products;