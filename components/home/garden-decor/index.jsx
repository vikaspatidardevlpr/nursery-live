import Image from "next/image";
import { Button } from "@chakra-ui/react";

const data = [
  {
    image: "images/gd-1.jpg",
    title: "Planters - Starting ₹129",
    subTitle: "Add color to your garden. 400+ pots of different colors, shapes, and materials",
    color: "#484848",
    primary: true,
  },
  {
    image: "images/gd-2.jpg",
    title: "Soil & Fertilizers - Starting ₹100",
    subTitle: "Healthy food is a key for healthy plants. Choose from a wide range of soil and fertilizers.",
    color: "#47250F",
    primary: true,
  },
  {
    image: "images/gd-3.jpg",
    title: "Pebbles - Starting ₹79",
    subTitle: "Add visual and textural features to your garden with a wide range of natural pebbles.",
    color: "#082A54",
    primary: true,
  }
  ,
  {
    image: "images/gd-4.jpg",
    title: "Tools - Starting ₹129",
    subTitle: "Get a tool for every gardening activity and make it a fun experience.",
    color: "#2A2A2A",
    primary: true,
  }
];
const GardenDecor = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="container">
          <h1 className="text-[20px] text-center py-8 font-semibold">
          Garden Decor & Care
          </h1>
            <div className="flex flex-wrap gap-4 justify-between px-16">
              {data.map(
                (item, index) =>
                  item.primary && (
                    <div
                      key={index}
                      className="md:h-[320px] cursor-pointer p-8 bg-[length:100%_100%] mb-6 w-[49%]"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    >
                      <h1
                        className={`text-3xl font-semibold`}
                        style={{ color: item.color }}
                      >
                        {item.title}
                      </h1>
                      <p
                        className={`text-[20px] py-2`}
                        style={{ color: item.color }}
                      >
                        {item.subTitle}
                      </p>
                      <Button
                        variant="solid"
                        fontSize="sm"
                        w="fit-content"
                        color="white"
                        bg="#FF6B6B"
                        mt="14px"
                        _hover={{
                          backgroundColor: "#FF6B6B",
                          boxShadow: "0px 1px 5px 1px #aaa",
                        }}
                      >
                        Shop Now
                      </Button>
                    </div>
                  )
              )}
            </div>
        </div>
      </div>
    </>
  );
};
export default GardenDecor;
