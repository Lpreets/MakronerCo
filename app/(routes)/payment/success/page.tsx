import { Button } from '@/components/ui/button'
import { CheckCheck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const StripeSuccess = () => {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base font-semibold text-center">Payment Done!</h3>
          <p className="my-2">Thank you for your purchase! We hope you enjoy it</p>
          <p>Have a great day!</p>
          <Button className="mt-4"><Link href="/">GO Back</Link></Button>
        </div>
      </div>
    </div>
  )
}

export default StripeSuccess