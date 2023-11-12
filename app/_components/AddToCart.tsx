"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

export interface ProdutCart {
  name: string;
  price: number;
  image: string;
  currency: string;
}

const AddToCartMulti = ({currency, price, image, name}: ProdutCart) => {
  const { addItem } = useShoppingCart();

  const product = {
    name: name,
    price: price,
    image: image,
    currency: currency,
    id: "1234",
  }

  return (
    <Button onClick={() => {addItem(product)}}>Add to Cart</Button>
  )
}

export default AddToCartMulti;