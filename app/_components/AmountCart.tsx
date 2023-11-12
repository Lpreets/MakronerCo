"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import AddToCartMulti from './AddToCartMulti'

const AmountCart = (data: any) => {
    const [count, setCount] = useState(0)

    return (
        <div className="flex flex-col justify-center mt-2">
            <div className="flex flex-row justify-center gap-4">
              <Button onClick={() => count > 0 && setCount(count - 1)}>-</Button>
              <p className="flex items-center">{count}</p>
              <Button onClick={() => setCount(count + 1)}>+</Button>
            </div>
            <div className="flex flex-col justify-center mt-4 ">
            <AddToCartMulti count={count} id={data._id} currency="Kr" name={data.name} price={data.price} image={data.imageUrl} />
            </div>
        </div>
    )
}

export default AmountCart;