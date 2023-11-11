"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'


const Counter = () => {
    const [count, setCount] = useState(0)

  return (
    <div className="flex flex-row p-2 items-center justify-center gap-4">
        <Button onClick={() => count > 0 && setCount(count - 1)}>-</Button>
        <p>{count}</p>
        <Button onClick={() => setCount(count + 1)}>+</Button>
    </div>
  )
}

export default Counter