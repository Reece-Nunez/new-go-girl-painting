'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const images = [
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/C2A5CCD0-B729-480B-BDB2-C295A46A3B1E.JPG",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/205F23DD-C502-4F55-A51A-360E10C9C5B5.JPG",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/80072154-0FDC-4FA2-B081-1BA1F0714A2D.JPG",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/4D664141-0BD4-4AF2-B94D-E4EE263E2CD6.JPG",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/4FBD5B13-DC6F-46BB-9715-4553023B2621.JPG",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/6EB042A3-F422-4D16-9C0A-B098F6F5DBDA.JPG",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/9F27DBF8-491E-41E5-9DE6-0DFDDE6F8194.JPG",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/AA415A4D-669B-40BB-A88B-54FF60BB7DBD.JPG",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/D5964D11-639B-499E-9680-6A9765C2CDEA.JPG",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/E439D384-2B9E-43C0-9600-D6F30F718DA7.JPG",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential1.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential2.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential3.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential4.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential5.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential6.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential7.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential8.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential9.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential10.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential11.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential18.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential19.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential20.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential21.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential22.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential23.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential30.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential24.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential25.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential26.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential27.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential28.png",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential29.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential31.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential32.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential33.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential34.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential35.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential36.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential37.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/res-room.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/res-closet.jpg",
  "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/brown-house.jpg",
];

export default function ResidentialGalleryPage() {
  const [index, setIndex] = useState(-1)

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-[var(--pink-brand)] mb-12">
        Residential Painting Gallery
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
              alt={`Residential Painting ${i + 1}`}
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
