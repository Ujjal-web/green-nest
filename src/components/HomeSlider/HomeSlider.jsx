import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


const featuredPlants = [
    {
        id: 1,
        plantName: "Snake Plant",
        title: "Breathe Better with Nature",
        subtitle: "A hardy plant that purifies your indoor air effortlessly.",
        image:
            "https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 2,
        plantName: "Spider Plant",
        title: "Safe for Pets, Perfect for Homes",
        subtitle: "Gentle greenery that’s non-toxic and refreshingly simple.",
        image:
            "https://images.pexels.com/photos/4603795/pexels-photo-4603795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 3,
        plantName: "Golden Pothos",
        title: "Grow Happiness Anywhere",
        subtitle: "A resilient trailing beauty that thrives with little care.",
        image:
            "https://images.pexels.com/photos/793012/pexels-photo-793012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 4,
        plantName: "Snake Plant",
        title: "Breathe Better with Nature",
        subtitle: "A hardy plant that purifies your indoor air effortlessly.",
        image:
            "https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 5,
        plantName: "Spider Plant",
        title: "Safe for Pets, Perfect for Homes",
        subtitle: "Gentle greenery that’s non-toxic and refreshingly simple.",
        image:
            "https://images.pexels.com/photos/4603795/pexels-photo-4603795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 6,
        plantName: "Golden Pothos",
        title: "Grow Happiness Anywhere",
        subtitle: "A resilient trailing beauty that thrives with little care.",
        image:
            "https://images.pexels.com/photos/793012/pexels-photo-793012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];


const reorderedSlides = [...featuredPlants.slice(1), featuredPlants[0]];

const HomeSlider = () => {
    return (
        <div className="slider-container">
            <h3 className="text-4xl text-center py-4 md:font-bold">Featured Plants</h3>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 3 },
                }}
                centeredSlides={true}
                slideToClickedSlide={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                }}
                spaceBetween={40}
            >
                {reorderedSlides.map((plant) => (
                    <SwiperSlide key={plant.id}>
                        <div className="slide-item">
                            <img src={plant.image} alt={plant.plantName} />
                            <div className="overlay">
                                <h3 className="fade-in-text">{plant.title}</h3>
                                <p className="fade-in-text delay-1">{plant.plantName}</p>
                                <span className="fade-in-text delay-2">{plant.subtitle}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


            <div className="custom-pagination"></div>
        </div>
    );
};

export default HomeSlider;