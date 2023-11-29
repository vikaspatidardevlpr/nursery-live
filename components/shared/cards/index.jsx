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
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

const Cards = ({ data }) => {
  return (
    <Card
    w="100%"
      _hover={{
        "&> .btnFooter": {
          height: "fit-content",
          overflow: "none",
          padding: "12px",
        },
      }}
      cursor="pointer"
    >
      <CardBody>
        <div className="relative">
          <Image src={data.image} width={300} height={80} alt={data.title} />
          <div className="bg-[#FF6B6B] w-fit px-1 text-white absolute bottom-0">
            Save {data.offer}
          </div>
        </div>
        <p className="text-sm line-through font-semibold text-slate-400 ">
          ₹ {data.cutPrice}
        </p>
        <h1 className="text-2xl font-semibold text-[#FF6B6B]">
          ₹ {data.price}
        </h1>
        <p className="text-[#4D4D4D]">{data.title}</p>
        <Rate
          defaultValue={data.rate}
          className="text-xs text-yellow-400"
        />{" "}
        <span className="text-xs px-2">{data.review} review</span>
        <div className="mt-2 flex gap-2">
          <Image src="/images/flash.png" width={18} height={18} />
          <span>{data.offerTitle}</span>
        </div>
      </CardBody>
      <CardFooter
        className="btnFooter"
        transition="0.2s linear padding"
        height={
          {
            xl:"0px"
          }
        }
        py={
          {
            xl:"0px"
          }
        }
        overflow="hidden"
      >
        <Button
          variant="solid"
          fontSize="sm"
          w="100%"
          color="white"
          bg="#FF6B6B"
          _hover={{ backgroundColor: "#FF6B6B" }}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Cards;
