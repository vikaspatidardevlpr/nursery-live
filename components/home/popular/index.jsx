import Image from "next/image";
import { Button } from "@chakra-ui/react";

const data = [
  {
    image: "images/p-1.jpg",
    title: "A Living Gift - Upto 30% Off",
    subTitle: "Express true emotion with a gift that grow forever",
    color: "#8F3828",
    primary: true,
  },
  {
    image: "images/p-2.jpg",
    title: "A Living Gift - Upto 30% Off",
    subTitle: "Express true emotion with a gift that grow forever",
    color: "#175612",
    primary: true,
  },
  {
    image: "images/p-3.jpg",
    title: "A Living Gift - Upto 30% Off",
    subTitle: "Express true emotion with a gift that grow forever",
    color: "#13510E",
    primary: false,
  },
  {
    image: "images/p-4.jpg",
    title: "A Living Gift - Upto 30% Off",
    subTitle: "Express true emotion with a gift that grow forever",
    color: "#6C2207",
    primary: false,
  },
  {
    image: "images/p-5.jpg",
    title: "A Living Gift - Upto 30% Off",
    subTitle: "Express true emotion with a gift that grow forever",
    color: "#4D4D4D",
    primary: false,
  },
];
const Popular = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="container">
          <h1 className="text-[20px] text-center py-8 font-semibold">
            Popular
          </h1>
          <div className="flex lg:flex-row flex-col gap-2 px-2">
            <div className="lg:w-[65%]">
              {data.map(
                (item, index) =>
                  item.primary && (
                    <div
                      key={index}
                      className="md:h-[430px] cursor-pointer p-8 bg-[length:100%_100%] mb-6"
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
            <div className="lg:w-[35%] flex flex-col justify-between">
              {data.map(
                (item, index) =>
                  !item.primary && (
                    <div
                      key={index}
                      className="lg:h-[290px] md:h-[430px] cursor-pointer p-8 bg-[length:100%_100%] mb-6 lg:mb-0"
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
          {/* ######### categry show######### */}
          <div className="p-8 bg-[#F8F8F8] mt-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-0  justify-between">
            <div className="flex gap-2 items-start">
              <i class="bx bx-mobile-alt text-[#4D4D4D] text-6xl"></i>
              <div className="w-44">
                <h1 className="text-[#4D4D4D] font-semibold text-[18px] pb-1">
                  Largest Nursery
                </h1>
                <p className="text-[#4D4D4D]">
                  1.2 Million plant lovers connected with us
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-start">
              <i class="bx bx-group text-[#4D4D4D] text-6xl"></i>
              <div className="w-44">
                <h1 className="text-[#4D4D4D] font-semibold text-[18px] pb-1">
                  Lifetime Support
                </h1>
                <p className="text-[#4D4D4D]">
                  We help you grow your garden for lifetime
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-start">
              <i class="bx bx-building-house text-[#4D4D4D] text-6xl"></i>
              <div className="w-44">
                <h1 className="text-[#4D4D4D] font-semibold text-[18px] pb-1">
                  All India Delivery
                </h1>
                <p className="text-[#4D4D4D]">
                  Delivering greenery across India since 2014
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-start">
              <i class="bx bxs-truck bx-flip-horizontal text-[#4D4D4D] text-6xl"></i>
              <div className="w-44">
                <h1 className="text-[#4D4D4D] font-semibold text-[18px] pb-1">
                  Secure Shipping
                </h1>
                <p className="text-[#4D4D4D]">
                  Diligent care taken to deliver healthy plants
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Popular;
