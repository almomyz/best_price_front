// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// custom style
import "../styles/custom-swiper.css";

// const fetchBanners = async () => {
//   const { data } = await axios.get('/api/banners');
//   return data;
// };

export default function HomeSlider() {
    const banners = [
        {
            image: "/slider/slider_1.webp",
            title: "First Banner Title",
        },
        {
            image: "/slider/slider_2.webp",
            title: "Second Banner Title",
        },
        {
            image: "/slider/slider_3.webp",
            title: "Third Banner Title",
        },
        {
            image: "/slider/slider_4.webp",
            title: "Forth Banner Title",
        },
    ];

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            navigation
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
        >
            {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                <a href="#" >
                    <img
                        src={banner.image}
                        alt={banner.title}
                        className="h-auto w-full rounded shadow-lg"
                    />
                </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
