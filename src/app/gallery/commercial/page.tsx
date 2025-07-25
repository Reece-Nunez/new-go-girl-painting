'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const images = [
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/90A7E572-D921-4E90-89B5-EDD697D59340.JPG',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/96B6B74E-BA07-4D11-ABEE-FF70D9491928.JPG',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/A3F54CE0-F0BB-4678-9781-CF2EFAAF757B.JPG',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/FE1A7695-9E25-4BAF-8480-D63ADCF5189A.JPG',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial1.png',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial2.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial3.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial4.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial5.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial6.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial7.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial8.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial9.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial10.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial11.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial12.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial13.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial14.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial15.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial16.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial17.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial18.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial19.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial20.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial21.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial22.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial23.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial24.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial25.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial26.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial27.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial28.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial29.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial30.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial31.jpg',
]

export default function CommercialGalleryPage() {
    const [index, setIndex] = useState(-1)

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-center text-[var(--pink-brand)] mb-12">
                Commercial Painting Gallery
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((src, i) => (
                    <div
                        key={i}
                        className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
                        onClick={() => setIndex(i)}
                    >
                        <Image
                            src={src}
                            alt={`Commercial Painting ${i + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={images.map((src) => ({ src }))}
            />
        </div>
    )
}
