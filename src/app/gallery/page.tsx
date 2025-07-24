'use client';

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";

const commercialImages = [
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial1.png",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial2.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial3.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial4.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial5.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial6.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial7.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial8.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial9.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial12.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial13.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial17.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial18.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial19.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial20.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial21.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial24.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial26.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial29.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial31.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/com-stairs.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/com-stairs2.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/com-ceiling.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/hallway.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/school.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/trophy-case.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/trophy-case2.jpg",
];

const residentialImages = [
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
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential12.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential13.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential14.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential15.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential16.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential17.jpg",
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
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/deck1.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/deck2.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet1.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet2.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet3.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet4.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet5.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/res-room.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/res-closet.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/brown-house.jpg",
];

export default function GalleryPage() {
    const [isOpen, setIsOpen] = useState(false);
    interface Slide {
        src: string;
        description: string;
    }
    const [slides, setSlides] = useState<Slide[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('Commercial');

    interface Slide {
        src: string;
        description: string;
    }

    type TabLabel = 'Commercial' | 'Residential';

    const openGallery = (
        images: string[],
        index: number,
        label: TabLabel
    ): void => {
        setSlides(
            images.map((src, i): Slide => ({
                src,
                description: `${label} Project ${i + 1}`,
            }))
        );
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    };

    interface RenderImageGridProps {
        images: string[];
        label: string;
    }

    const renderImageGrid = ({ images, label }: RenderImageGridProps) => (
        <section className="mb-20 relative z-10">
            <div className="absolute inset-0 bg-pink-50 opacity-40 blur-3xl rounded-xl -z-10" />

            <motion.h2
                className="text-3xl font-semibold mb-8 text-center text-[var(--color-brand)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {label}
            </motion.h2>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {images.map((img: string, index: number) => (
                    <motion.div
                        key={index}
                        className="relative group cursor-pointer"
                        onClick={() => openGallery(images, index, label as TabLabel)}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.03 }}
                    >
                        <img
                            src={img}
                            alt={`${label} Project ${index + 1}`}
                            className="rounded-xl shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300 w-full"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent hover:cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                            <span className="text-gray-900 text-lg font-semibold ">View Photo</span>
                        </div>

                    </motion.div>

                ))}
            </Masonry>
        </section>
    );

    return (
        <div className="py-16 px-6 max-w-7xl mx-auto">
            <motion.h1
                className="text-5xl font-extrabold text-center mb-16 text-[var(--color-brand)]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Project Gallery
            </motion.h1>

            <div className="flex justify-center gap-6 mb-12">
                {['Commercial', 'Residential'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 rounded-full hover:cursor-pointer font-semibold transition ${activeTab === tab ? 'bg-[var(--color-brand)] text-white' : 'bg-white text-[var(--color-brand)] border border-pink-700'
                            } hover:scale-105`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {activeTab === 'Commercial' && renderImageGrid({ images: commercialImages, label: 'Commercial Work' })}
            {activeTab === 'Residential' && renderImageGrid({ images: residentialImages, label: 'Residential Work' })}

            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={slides}
                index={currentIndex}
                on={{ view: ({ index }) => setCurrentIndex(index) }}
            />
        </div>
    );
}