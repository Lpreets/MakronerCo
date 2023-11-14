"use client"

import React,  { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useShoppingCart } from 'use-shopping-cart'

export interface ProdutCart {
  id: string;
  name: string;
  price: number;
  image: string;
  currency: 'NOK',
}

const AddToCartMulti = ({id, price, image, name, currency}: ProdutCart) => {
  const { addItem } = useShoppingCart();
  const [count, setCount] = useState(0)

  const product = {
    id: id,
    name: name,
    price: price,
    image: image,
    currency: currency,
  }

  return (
    <div className="flex flex-col justify-center mt-2">
    <div className="flex flex-row justify-center gap-4">
      <Button onClick={() => count > 0 && setCount(count - 1)}>-</Button>
      <p className="flex items-center">{count}</p>
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </div>
    <div className="flex flex-col justify-center mt-4 ">
    </div>
    <Button onClick={() => {for(let i = 0; i < count; i++) addItem(product)}}>Add to Cart</Button>
</div>
  )
}

export default AddToCartMulti;