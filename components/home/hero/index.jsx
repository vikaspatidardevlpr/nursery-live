import Image from "next/image";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation, Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const heroCategory = [
   {
    name:"OFFERS",
    image:"images/hero-c-1.avif",
    href:"#"
   },
   {
    name:"GARDENING",
    image:"images/hero-c-2.avif",
    href:"#"
   },
   {
    name:"PLANTS",
    image:"images/hero-c-3.avif",
    href:"#"
   },
   {
    name:"SEEDS",
    image:"images/hero-c-4.avif",
    href:"#"
   },
   {
    name:"BULBS",
    image:"images/hero-c-5.avif",
    href:"#"
   },
   {
    name:"POTS",
    image:"images/hero-c-6.avif",
    href:"#"
   },
   {
    name:"FERTILIZERS",
    image:"images/hero-c-7.avif",
    href:"#"
   },
   {
    name:"CORPORATE",
    image:"images/hero-c-8.avif",
    href:"#"
   },
   {
    name:"PEBBLES",
    image:"images/hero-c-9.avif",
    href:"#"
   },
   {
    name:"ACCESSORIES",
    image:"images/hero-c-10.avif",
    href:"#"
   },
] 

const swiperSection = [
    {
        image:"/images/hero-swiper-1.jpg",
        href:"#"
    },
    {
        image:"/images/hero-swiper-2.jpg",
        href:"#"
    },
    {
        image:"/images/hero-swiper-3.jpg",
        href:"#"
    },
    {
        image:"/images/hero-swiper-4.jpg",
        href:"#"
    }
]
const Hero = ()=>{
    return (
       <>
       <div className="flex justify-center gap-4 flex-wrap">
        {
            heroCategory.map((category,item)=><div>
            <button className="md:w-24 md:h-24 w-20 h-20 rounded-full hover:scale-110 transition-all ">
                <img src={category.image} width="100%" height="100%" />
            </button>
        </div>)
        }
       </div>

       <Swiper pagination={true} navigation={true} modules={[Navigation,Pagination]} className="mySwiper mt-16">
        {
            swiperSection.map((item,index)=><SwiperSlide key={index}><Image src={item.image} width={5000} height={1200}  /></SwiperSlide>)
        }
       
        
      </Swiper>
       </>
    )
}

export default Hero;