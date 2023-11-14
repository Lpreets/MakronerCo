"use client"

import React,  { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useShoppingCart } from 'use-shopping-cart'

export interface ProdutCart {
  name: string;
  price: number;
  image: string;
  currency: 'NOK',
  price_id: string;
}

const AddToCartMulti = ({price, image, name, price_id, currency}: ProdutCart) => {
  const { addItem } = useShoppingCart();
  const [count, setCount] = useState(0)

  const product = {

    name: name,
    price: price,
    image: image,
    currency: currency,
    price_id: price_id
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