import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import {
  Input,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  InputGroup,
  Select,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const topMenu = [
  "Help",
  "Track Order",
  "Orders",
  "Wishlist",
  "Offers",
  "Corporate",
];
const topMenuIcon = [
  "facebook",
  "twitter",
  "pinterest",
  "instagram-alt",
  "youtube",
  "linkedin",
];

const mainMenu = [
  {
    name: "Gardening",
    nisted: true,
    content: [
      {
        name: "Tranding and Gardning",
        content: [
          "Bestseller in Gardening",
          "Indoor Gardening",
          "Monsoon Special Plants packs",
          "Balcony and Terrace Garden",
          "Vertical garden",
          "Miniature garden",
          "Garden kits",
          "Top 3 Plants' Pack",
          "Top 5 Plants' Pack",
          "Indoor Plants Pack",
          "Air Purifying Plants' Pack",
          "Cactus and Succulents' Packs",
          "Flowering Plants' Pack",
        ],
        nisted: false,
      },

      {
        name: "Plants' Packs by Feature",
        content: [
          "Bestseller in Gardening",
          "Indoor Gardening",
          "Monsoon Special Plants packs",
          "Balcony and Terrace Garden",
          "Vertical garden",
          "Miniature garden",
          "Garden kits",
          "Top 3 Plants' Pack",
          "Top 5 Plants' Pack",
          "Indoor Plants Pack",
          "Air Purifying Plants' Pack",
          "Cactus and Succulents' Packs",
          "Flowering Plants' Pack",
        ],
        nisted: false,
      },
      {
        name: "Top Plants' Pack",
        content: [
          "Bestseller in Gardening",
          "Indoor Gardening",
          "Monsoon Special Plants packs",
          "Balcony and Terrace Garden",
          "Vertical garden",
          "Miniature garden",
          "Garden kits",
          "Top 3 Plants' Pack",
          "Top 5 Plants' Pack",
          "Indoor Plants Pack",
          "Air Purifying Plants' Pack",
          "Cactus and Succulents' Packs",
          "Flowering Plants' Pack",
        ],
        nisted: false,
      },
      {
        name: "Minature Gardens & Kits",
        content: [
          "Bestseller in Gardening",
          "Indoor Gardening",
          "Monsoon Special Plants packs",
          "Balcony and Terrace Garden",
          "Vertical garden",
          "Miniature garden",
          "Garden kits",
          "Top 3 Plants' Pack",
          "Top 5 Plants' Pack",
          "Indoor Plants Pack",
          "Air Purifying Plants' Pack",
          "Cactus and Succulents' Packs",
          "Flowering Plants' Pack",
        ],
        nisted: false,
      },
      {
        name: "Plants' Pack by Location",
        content: [
          "Bestseller in Gardening",
          "Indoor Gardening",
          "Monsoon Special Plants packs",
          "Balcony and Terrace Garden",
          "Vertical garden",
          "Miniature garden",
          "Garden kits",
          "Top 3 Plants' Pack",
          "Top 5 Plants' Pack",
          "Indoor Plants Pack",
          "Air Purifying Plants' Pack",
          "Cactus and Succulents' Packs",
          "Flowering Plants' Pack",
        ],
        nisted: false,
      },
      {
        name: "Plants' Packs by Occasions",
        content: [
          "Bestseller in Gardening",
          "Indoor Gardening",
          "Monsoon Special Plants packs",
          "Balcony and Terrace Garden",
          "Vertical garden",
          "Miniature garden",
          "Garden kits",
          "Top 3 Plants' Pack",
          "Top 5 Plants' Pack",
          "Indoor Plants Pack",
          "Air Purifying Plants' Pack",
          "Cactus and Succulents' Packs",
          "Flowering Plants' Pack",
        ],
        nisted: false,
      },
      {
        name: "Plants' Pack by Season",
        content: [
          "Bestseller in Gardening",
          "Indoor Gardening",
          "Monsoon Special Plants packs",
          "Balcony and Terrace Garden",
          "Vertical garden",
          "Miniature garden",
          "Garden kits",
          "Top 3 Plants' Pack",
          "Top 5 Plants' Pack",
          "Indoor Plants Pack",
          "Air Purifying Plants' Pack",
          "Cactus and Succulents' Packs",
          "Flowering Plants' Pack",
        ],
        nisted: false,
      },
    ],
  },

  {
    name: "Plants",
    nisted: true,
    content: [
      {
        name: "Tranding Plants",
        content: [
          "Bestseller in Gardening",
          "Indoor Gardening",
          "Monsoon Special Plants packs",
          "Balcony and Terrace Garden",
          "Vertical garden",
          "Miniature garden",
          "Garden kits",
          "Top 3 Plants' Pack",
          "Top 5 Plants' Pack",
          "Indoor Plants Pack",
          "Air Purifying Plants' Pack",
          "Cactus and Succulents' Packs",
          "Flowering Plants' Pack",
        ],
        nisted: false,
      },
    ],
  },

  {
    name: "Seeds",
    nisted: true,
    content: [
      {
        name: "Tranding Plants",
        content: [
          "Bestseller in Gardening",
          "Indoor Gardening",
          "Monsoon Special Plants packs",
          "Balcony and Terrace Garden",
          "Vertical garden",
          "Miniature garden",
          "Garden kits",
          "Top 3 Plants' Pack",
          "Top 5 Plants' Pack",
          "Indoor Plants Pack",
          "Air Purifying Plants' Pack",
          "Cactus and Succulents' Packs",
          "Flowering Plants' Pack",
        ],
        nisted: false,
      },
    ],
  },

  {
    name: "Planters",
    nisted: true,
    content: [
      {
        name: "Tranding Plants",
        content: [
          "Bestseller in Gardening",
          "Indoor Gardening",
          "Monsoon Special Plants packs",
          "Balcony and Terrace Garden",
          "Vertical garden",
          "Miniature garden",
          "Garden kits",
          "Top 3 Plants' Pack",
          "Top 5 Plants' Pack",
          "Indoor Plants Pack",
          "Air Purifying Plants' Pack",
          "Cactus and Succulents' Packs",
          "Flowering Plants' Pack",
        ],
        nisted: false,
      },
    ],
  },

  {
    name: "Solid & Fertilizer",
    nisted: true,
    content: [
      {
        name: "Tranding Plants",
        content: [
          "Bestseller in Gardening",
          "Indoor Gardening",
          "Monsoon Special Plants packs",
          "Balcony and Terrace Garden",
          "Vertical garden",
          "Miniature garden",
          "Garden kits",
          "Top 3 Plants' Pack",
          "Top 5 Plants' Pack",
          "Indoor Plants Pack",
          "Air Purifying Plants' Pack",
          "Cactus and Succulents' Packs",
          "Flowering Plants' Pack",
        ],
        nisted: false,
      },
    ],
  },

  {
    name: "Corporate",
    nisted: false,
  },
];

const footerMenu = [
  {
    name: "Gardening Knowledge",
    nisted: false,
    content: [
      "Blogs > Plant Talk",
      "Blog > Kitchen Gardening",
      "Blogs > Top 10 Plants",
      "Blogs > Sustainable Living",
      "blog.nurserylive.com",
      "wiki.nurserylive.com",
    ],
  },

  {
    name: "Useful Links",
    nisted: false,
    content: [
      "Track Order",
      "Orders",
      "Wishlist",
      "FAQ's",
      "Offers",
      "Rewards",
      "Affiliate",
      "Corporate",
    ],
  },

  {
    name: "About",
    nisted: false,
    content: [
      "About Nurserylive",
      "Contact us",
      "Privacy Policy",
      "Refund Policy",
      "Shipping Policy",
      "Rewards",
      "Terms of Service",
      "Jobs",
    ],
  },
];

const lastFooterMenu = [
  {
    name: "Gardening : ",
    content:
      "Trending In Gardening,Plants' Packs By Features,Top Plants' Packs,Miniature Gardens & Kits,Plants' Packs By Location,Plants' Packs By Occasions,Plants' Packs By Season,",
  },
  {
    name: "Plants : ",
    content:
      "Trending Plants,Plants By Type,Plants By Features Uses,Plants By Season,Plants By Location,Foliage Plants,Flowering Plants,Plants By Color,",
  },
  {
    name: "Seeds : ",
    content:
      "Trending Seeds,Vegetable/Herb Seeds,Flower Seeds,Tree And Forestry Seeds,Other Seeds,Rainy Sowing Seeds,Seeds To Sow In All Seasons,Easy To Grow Seeds,Seeds By Name,Seeds By Feature & Uses,Seeds By Cuisines,Seeds By Flower Color,",
  },
  {
    name: "Bulbs : ",
    content:
      "Trending Flower Bulbs,Bulbs By Sowing Time,Bulbs By Flower Color,Bulbs By Name,",
  },
  {
    name: "Planters : ",
    content:
      "Trending Planters,Planter Accessories,Planters By Type,Planters By Size,Planters By Material,Planters By Color,Planters By Shape,Planters By Finish,Planters By Location,,",
  },
  {
    name: "Soil & Fertilizer : ",
    content:
      "Best Seller Soil And Fertilizer,Soil And Fertilizers' Packs,Organic Fertilizer,Potting Soil,Cocopeat,Soil Additives,",
  },
  {
    name: "Gifts : ",
    content:
      "Trending Gifts,Plants As Corporate Gifts,Gifts For Festivals,Gifts For Loved Ones,Gifts For Occasions,Gifts For Special Days,",
  },
  {
    name: "Pebbles : ",
    content:
      "Trending Pebbles,Pebbles By Color,Pebbles By Size,Pebbles By Type,",
  },
  {
    name: "Accessories : ",
    content:
      "Best Seller Accessories,Accessories - Clearance Sale,Gardening Tools,Miniature Garden Toys,Gardening Accessories,Addons,",
  },
];

const selectMenu = (
  <Select placeholder="All Categories" w="100%" boxShadow="0px">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </Select>
);
const Layout = ({children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [menuClose, setMenuClose] = useState({
    type: false,
    spacing: 0,
  });
  const [menuData, setMenuData] = useState([]);
  const btnRef = useRef();

  const handleScroll = () => {
    alert();
  };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //         window.removeEventListener("scroll", handleScroll);
  //     };
  // }, []);

  const handlerMenu = (e, menuItem) => {
    setMenuClose({
      type: true,
      spacing: e.clientX,
    });
    setMenuData(menuItem.content);
  };

  const DrawerComponent = () => (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton onClick={onClose} />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
          <Input placeholder="Type here..." />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );

  const NistedMenu = ({ data }) => {
    return (
      <>
        {data.map((nistedItem, index) => (
          <div className="px-8" key={index}>
            <div>
              <h1 className="font-semibold text-slate-600 text-lg py-2">
                {nistedItem.name}
              </h1>
              {nistedItem.content.map((list, index) =>
                nistedItem.nisted ? (
                  <p key={index} className="py-4">
                    {list} <i className="bx bx-chevron-right"></i>
                  </p>
                ) : (
                  <p
                    key={index}
                    className="py-1 hover:text-red-500 font-normal"
                  >
                    {list}
                  </p>
                )
              )}
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <ChakraProvider>
      <DrawerComponent></DrawerComponent>
      {/* top menu design */}
      <nav className="w-full border border-t-0 md:flex items-center p-3 px-6 justify-between hidden">
        <div className="flex gap-5 items-center">
          <Link href="#" legacyBehavior>
            <a className="text-sm bg-red-400 text-white px-2 pb-[2px] rounded font-semibold block">
              Rewards
            </a>
          </Link>
          {topMenu.map((menuItem, index) => (
            <Link href="#" key={index} legacyBehavior>
              <a className="text-xs font-semibold text-[#949494]">{menuItem}</a>
            </Link>
          ))}
        </div>
        {/* top menu icon design */}
        <div>
          {topMenuIcon.map((iconName, index) => (
            <i key={index} className={`bx bxl-${iconName} text-lg text-[#949494] px-2`}></i>
          ))}
        </div>
      </nav>

      {/* main menu design */}
      <nav className="shadow">
        <div className="flex flex-nowrap items-center justify-start px-6 gap-5 py-2 pt-4 md:py-5">
          <div className="w-full md:w-auto md:shrink-0 flex items-center gap-4">
            <i
              className="bx bx-menu-alt-left text-3xl cursor-pointer md:hidden"
              onClick={onOpen}
              ref={btnRef}
            ></i>
            <img src="images/logo.avif" className="w-[150px]" />
          </div>
          <div className="w-4/5 hidden md:block">
            <Stack w="100%" boxShadow="md">
              <InputGroup size="lg" w="100%">
                <InputLeftAddon children={selectMenu} bg="#eee" p={0} />
                <Input placeholder="What are you looking for?" />
                <InputRightAddon
                  children={
                    <i className={`bx bx-search text-lg text-white px-2`}></i>
                  }
                  bg="#FF6B6B"
                />
              </InputGroup>
            </Stack>
          </div>

          <div className="flex items-center gap-2">
            <i className="bx bx-conversation md:text-3xl text-2xl"></i>
            <div className="hidden lg:block">
              <h1 className="font-semibold text-sm w-28">Expert Support</h1>
              <p className="text-sm">Available 24/7</p>
            </div>
          </div>

          <div className="lg:flex items-center gap-2 hidden">
            <i className="bx bx-user text-3xl"></i>
            <div>
              <h1 className="font-semibold text-sm">Login</h1>
            </div>
          </div>

          <i className="bx bx-cart md:text-3xl text-2xl"></i>
        </div>

        <div className="px-6 gap-5 py-2 md:hidden">
          <Stack w="100%" boxShadow="md">
            <InputGroup size="lg" w="100%">
              <InputLeftAddon w="20%" children={selectMenu} bg="#eee" p={0} />
              <Input placeholder="mysite" />
              <InputRightAddon
                children={
                  <i className={`bx bx-search text-lg text-white px-2`}></i>
                }
                bg="#FF6B6B"
              />
            </InputGroup>
          </Stack>
        </div>

        {/* ######## main menu coding start ######## */}
        <div className="md:flex gap-6 px-6 pb-4 font-semibold relative hidden">
          {mainMenu.map((menuItem, index) =>
            menuItem.nisted ? (
              <p
                className="cursor-pointer"
                key={index}
                onMouseEnter={(e) => handlerMenu(e, menuItem)}
                onMouseLeave={() => setMenuClose({ ...menuClose, type: false })}
              >
                {menuItem.name}
                <i className="bx bx-chevron-down"></i>
              </p>
            ) : (
              <p key={index} className="cursor-pointer">{menuItem.name}</p>
            )
          )}
          <div
            style={{ left: menuClose.spacing / 2 + "px" }}
            onMouseEnter={() => setMenuClose({ ...menuClose, type: true })}
            onMouseLeave={() => setMenuClose({ ...menuClose, type: false })}
            className={`${
              menuClose.type ? `h-auto p-4` : "h-0 p-0"
            } z-10 absolute flex gap-16 top-8 bg-white w-fit overflow-hidden transition-all mx-4 shadow`}
          >
            <NistedMenu data={menuData}></NistedMenu>
          </div>
        </div>
      </nav>

      {/* ########### section start ############## */}
      <section className="px-6 py-4">
            {
              children
            }
      </section>

      {/* ################ section complete ##################### */}

      {/* ###### header coding end ####### */}

      <footer className="bg-[#F5F3ED] py-8 md:px-4 mt-8 flex items-start md:items-center flex-col">
        <div className="p-2 container grid lg:grid-cols-5 gap-4 md:grid-cols-3 grid-cols-1">
          <NistedMenu data={footerMenu}></NistedMenu>

          <div className="px-6 md:col-span-3 lg:col-span-1">
            <h1 className="font-semibold text-slate-600 text-lg py-2">
              Follow Us
            </h1>
            <div className="flex gap-2">
              <div className="text-2xl bg-[#DFDED9] w-8 h-8 block rounded-full px-1 cursor-pointer transition-all hover:scale-110">
                <i className="bx bxl-facebook text-[#686868]"></i>
              </div>
              <div className="text-2xl bg-[#DFDED9] w-8 h-8 block rounded-full px-1 cursor-pointer transition-all hover:scale-110">
                <i className="bx bxl-twitter text-[#686868]"></i>
              </div>

              <div className="text-2xl bg-[#DFDED9] w-8 h-8 block rounded-full px-1 cursor-pointer transition-all hover:scale-110">
                <i className="bx bxl-pinterest text-[#686868]"></i>
              </div>

              <div className="text-2xl bg-[#DFDED9] w-8 h-8 block rounded-full px-1 cursor-pointer transition-all hover:scale-110">
                <i className="bx bxl-instagram-alt text-[#686868]"></i>
              </div>

              <div className="text-2xl bg-[#DFDED9] w-8 h-8 block rounded-full px-1 cursor-pointer transition-all hover:scale-110">
                <i className="bx bxl-youtube text-[#686868]"></i>
              </div>
              <div className="text-2xl bg-[#DFDED9] w-8 h-8 block rounded-full px-1 cursor-pointer transition-all hover:scale-110">
                <i className="bx bxl-linkedin text-[#686868]"></i>
              </div>
            </div>
          </div>

          <div className="px-6 md:col-span-3 lg:col-span-1">
            <h1 className="font-semibold text-slate-600 text-lg py-2">
              Subscribe
            </h1>
            <p>Join us to receive gardening tips, offers, news & more</p>
            <div className="flex gap-2 mt-4">
              <input
                type="text"
                className="w-[60%] h-11 p-2 border rounded"
                placeholder="Email Address"
              />
              <button className="w-[30%] h-11 text-white shrink-0 bg-[#FF6B6B] rounded px-2 text-sm">
                Sign up
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="container mt-8 pl-8">
          <h1 className="font-semibold text-slate-600 text-lg py-2 ">
            Nurserylive: Largest Garden Store in India
          </h1>
          {lastFooterMenu.map((item, index) => (
            <p key={index} className="font-semibold text-slate-600 text-sm pb-3 pr-4 text-justify">
              {item.name} <span className="font-normal">{item.content}</span>
            </p>
          ))}

          <p className=" text-slate-600 text-sm py-3 pr-4 ">
            All India | Bangalore | Hyderabad | Chennai | Delhi | Kolkata |
            Mumbai | Gurgaon | Pune | Trivandrum | Noida | Ahmedabad |
            Chandigarh | Kochi | Indore | Patna | Guwahati
          </p>
          <p className="text-slate-500">Copyright © 2023 Nurserylive.</p>
        </div>
      </footer>
      </ChakraProvider>
  );
};

export default Layout;
