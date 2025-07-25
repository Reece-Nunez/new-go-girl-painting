'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const images = [
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/492DC38E-DEE6-41E5-8919-AEC2A1AB0134.JPG',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet1.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet2.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet3.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet4.jpg',
    'https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet5.jpg',
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential12.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential13.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential14.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential15.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential16.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential17.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/deck1.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/deck2.jpg",
]

export default function CabinetGalleryPage() {
    const [index, setIndex] = useState(-1)

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-center text-[var(--pink-brand)] mb-12">
                Cabinet Painting Gallery
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
                            alt={`Cabinet Painting ${i + 1}`}
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
