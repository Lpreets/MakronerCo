import Image from 'next/image'
import React from 'react'
import { urlFor } from '../lib/sanity'

interface iAppProps {
    images: any
}

const ImageGallery = ({images}: iAppProps) => {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
        <div className="order-last flex-gap-4 lg:order-none lg:flex-col">
            {images.map((image: any, idx: any) => (
                <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
                     <Image
                src={urlFor(image).url()}
                alt={`Photo by ${image.name}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={150}
                height={250}
              />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ImageGallery