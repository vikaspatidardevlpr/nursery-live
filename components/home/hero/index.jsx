import Image from "next/image";
import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const heroCategory = [
  {
    name: "OFFERS",
    image: "images/hero-c-1.avif",
    href: "#",
  },
  {
    name: "GARDENING",
    image: "images/hero-c-2.avif",
    href: "#",
  },
  {
    name: "PLANTS",
    image: "images/hero-c-3.avif",
    href: "#",
  },
  {
    name: "SEEDS",
    image: "images/hero-c-4.avif",
    href: "#",
  },
  {
    name: "BULBS",
    image: "images/hero-c-5.avif",
    href: "#",
  },
  {
    name: "POTS",
    image: "images/hero-c-6.avif",
    href: "#",
  },
  {
    name: "FERTILIZERS",
    image: "images/hero-c-7.avif",
    href: "#",
  },
  {
    name: "CORPORATE",
    image: "images/hero-c-8.avif",
    href: "#",
  },
  {
    name: "PEBBLES",
    image: "images/hero-c-9.avif",
    href: "#",
  },
  {
    name: "ACCESSORIES",
    image: "images/hero-c-10.avif",
    href: "#",
  },
];

const serviceIcon = [
  {
    title: "Help Center",
    icon: "bx bx-group",
  },
  {
    title: "Track Order",
    icon: "bx bxs-truck bx-flip-horizontal",
  },
  {
    title: "Rewards",
    icon: "bx bxs-trophy bx-flip-horizontal",
  },
  {
    title: "Offers",
    icon: "bx bxs-offer bx-flip-horizontal",
  },
];

const swiperSection = [
  {
    image: "/images/hero-swiper-1.jpg",
    href: "#",
  },
  {
    image: "/images/hero-swiper-2.jpg",
    href: "#",
  },
  {
    image: "/images/hero-swiper-3.jpg",
    href: "#",
  },
  {
    image: "/images/hero-swiper-4.jpg",
    href: "#",
  },
];
const Hero = () => {
  const router = useRouter();
  const handler = (title)=>{
      const titleFormat = title.replaceAll(" ","-");
         router.push(`collections/${titleFormat}`)
  }
  return (
    <>
      <div className="flex justify-center gap-4 flex-wrap">
        {heroCategory.map((category, index) => 
          <div onClick={()=>handler(category.name)}>
            <button className="md:w-24 md:h-24 w-20 h-20 rounded-full hover:scale-110 transition-all ">
              <img src={category.image} width="100%" height="100%" />
            </button>
          </div>
        )}
      </div>

      <Swiper
        pagination={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper mt-16"
      >
        {swiperSection.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item.image} width={5000} height={1200} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex flex-col items-center h-36 justify-center mb-8 px-2 md:px-0">
        <div className="container text-center md:text-start">
          <h1 className="font-semibold py-6 md:text-lg">
            Happiness is availing great offers on Nurserylive App!
          </h1>
          <div className="flex gap-2 md:w-96 justify-center">
            <Image src="/images/s-1.avif" width={100} height={80} />
            <Image src="/images/s-2.avif" width={100} height={80} />
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-[#F8F8F8] p-8 ">
        <div className="container flex md:justify-around justify-between">
            {
                serviceIcon.map((item,index)=><div className="text-center" key={index}>
                <i className={`${item.icon} text-5xl md:text-6xl text-[#4D4D4D]`}></i>
                <h1 className="font-semibold text-[#4D4D4D] text-sm md:text-lg">{item.title}</h1>
              </div>
      )
            }
        </div>
      </div>
    </>
  );
};

export default Hero;
