import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Cards from "../../shared/cards";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Button,
  ButtonGroup,
  Heading,
} from "@chakra-ui/react";
import { Rate } from "antd";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const cardData = [
  {
    image: "/images/c-1.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title: "Top 4 Die Hard Succulents PackTop 4 Die Hard Succulents PackTop 4 Die Hard Succulents Pack",
    rate: 3,
    offerTitle: "4+ Offers Inside",
    review: "382",
  },
  {
    image: "/images/c-2.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title: "Top 4 Die Hard Succulents Pack",
    rate: 3,
    offerTitle: "4+ Offers Inside",
    review: "382",
  },
  {
    image: "/images/c-3.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title: "Top 4 Die Hard Succulents Pack",
    rate: 3,
    offerTitle: "4+ Offers Inside",
    review: "382",
  },
  {
    image: "/images/c-4.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title: "Top 4 Die Hard Succulents Pack",
    rate: 3,
    offerTitle: "4+ Offers Inside",
    review: "382",
  },
  {
    image: "/images/c-5.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title: "Top 4 Die Hard Succulents Pack",
    rate: 3,
    offerTitle: "4+ Offers Inside",
    review: "382",
  }
  ,
  {
    image: "/images/c-6.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title: "Top 4 Die Hard Succulents Pack",
    rate: 3,
    offerTitle: "4+ Offers Inside",
    review: "382",
  }
  ,
  {
    image: "/images/c-7.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title: "Top 4 Die Hard Succulents Pack",
    rate: 3,
    offerTitle: "4+ Offers Inside",
    review: "382",
  }
  ,
  {
    image: "/images/c-8.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title: "Top 4 Die Hard Succulents Pack",
    rate: 3,
    offerTitle: "4+ Offers Inside",
    review: "382",
  }
  ,
  {
    image: "/images/c-9.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title: "Top 4 Die Hard Succulents Pack",
    rate: 3,
    offerTitle: "4+ Offers Inside",
    review: "382",
  }
];

const SwiperCards = () => {
  return (
    <div className="flex justify-center mt-10 pt-8">
      <div className="container md:min-h-[500px] py-0 my-0">
        <h1 className="text-[20px] text-center font-semibold text-[#4D4D4D]">Value For Money - Upto 35% Off</h1>
        <Swiper
         breakpoints={{
          300: {
            slidesPerView: 1.5,
          },
          576: {
            slidesPerView: 2,
          },
          768:{
            slidesPerView: 3
          },
          1280:{
            slidesPerView: 5,
          }
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper mt-4"
        slidesPerView={5}
        spaceBetween={10}
      >   
       {
        cardData.map((item,index)=><SwiperSlide style={{minHeight:"500px",padding:"5px"}} key={index}>
           <Cards data={item}></Cards>
        </SwiperSlide>)
       }


      </Swiper>
      </div>
     
    </div>
  );
};

export default SwiperCards;
