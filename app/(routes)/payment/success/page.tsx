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
        <h1 className="text-center mt-10 text-3xl text-red-900">Payment Done! (Not Really)</h1>
          <p className="my-2">This website is under build</p>
          <p>No payment have been done</p>
          <Button className="mt-4"><Link href="/">GO Back</Link></Button>
        </div>
      </div>
    </div>
  )
}

export default StripeSuccess