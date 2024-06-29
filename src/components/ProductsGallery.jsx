import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../styles/gallery-swiper.css";

export default function ProductsGallery({images}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div className="flex gap-4" id="gallery_swiper">
                {/* thumb slider */}
                <div className="me-2 w-1/4 hidden md:block">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        direction="vertical"
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="thumbSwiper"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img.Photo_URL}
                                    alt={`Image ${index + 1}`}
                                    className="h-16 w-20 rounded"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* image slider */}
                <div className="w-full md:w-3/4">
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={
                            thumbsSwiper ? { swiper: thumbsSwiper } : undefined
                        }
                        modules={[FreeMode, Navigation, Thumbs, Pagination]}
                        className="imageSwiper"
                        pagination={{ clickable: true }}
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img.Photo_URL}
                                    alt={`Image ${index + 1}`}
                                    className="h-auto w-full rounded"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}
