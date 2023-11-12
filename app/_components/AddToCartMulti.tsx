"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { useShoppingCart } from 'use-shopping-cart'

export interface ProdutCart {
  id: string;
  name: string;
  price: number;
  image: string;
  currency: string;
  count: number;
}

const AddToCartMulti = ({id, currency, price, image, name, count}: ProdutCart) => {
  const { addItem } = useShoppingCart();

  const product = {
    id: id,
    name: name,
    price: price,
    image: image,
    currency: currency,
  }

  return (
    <Button onClick={() => {for(let i = 0; i < count; i++) addItem(product)}}>Add to Cart</Button>
  )
}

export default AddToCartMulti;