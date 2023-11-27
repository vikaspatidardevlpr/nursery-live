import Image from "next/image";
import Link from "next/link";
import { Input,InputLeftAddon,InputRightAddon,Stack,InputGroup,Select } from "@chakra-ui/react";

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

const selectMenu = <Select placeholder='All Categories' w="100%" boxShadow='0px'>
<option value='option1'>Option 1</option>
<option value='option2'>Option 2</option>
<option value='option3'>Option 3</option>
</Select>;
const Layout = () => {
  return (
    <>
      {/* top menu design */}
      <nav className="w-full border border-t-0 md:flex items-center p-3 px-8 justify-between hidden">
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
            <i className={`bx bxl-${iconName} text-lg text-[#949494] px-2`}></i>
          ))}
        </div>
      </nav>

      {/* main menu design */}
      <nav className="shadow ">
        <div className="flex flex-nowrap items-center px-6 gap-5 py-2 pt-4 md:py-5">
        <div className="w-full md:w-auto flex items-center gap-4">
        <i class='bx bx-menu-alt-left text-3xl cursor-pointer' ></i>
        <img src="images/logo.avif" className="w-[140px] md:w-[70%]" />
        </div>
        <div className="w-4/5 hidden md:block">
        <Stack w="100%" boxShadow='md'>
          <InputGroup size="lg" w="100%">
            <InputLeftAddon children={selectMenu} bg="#eee" p={0} />
            <Input placeholder="mysite" />
            <InputRightAddon children={<i className={`bx bx-search text-lg text-white px-2`}></i>} bg="#FF6B6B" />
          </InputGroup>
        </Stack>
        </div>

        <div className="flex items-center gap-2">
          <i class='bx bx-conversation md:text-3xl text-2xl'></i>
          <div className="hidden lg:block">
            <h1 className="font-semibold text-sm w-28">Expert Support</h1>
            <p className="text-sm">Available 24/7</p>
          </div>
        </div>

        <div className="lg:flex items-center gap-2 hidden">
          <i class='bx bx-user text-3xl'></i>
          <div>
            <h1 className="font-semibold text-sm">Login</h1>
          </div>
        </div>

        <i class='bx bx-cart md:text-3xl text-2xl' ></i>
         </div>

         <div className="px-6 gap-5 py-2 md:hidden">
        <Stack w="100%" boxShadow='md'>
          <InputGroup size="lg" w="100%">
            <InputLeftAddon w="20%" children={selectMenu} bg="#eee" p={0} />
            <Input placeholder="mysite" />
            <InputRightAddon children={<i className={`bx bx-search text-lg text-white px-2`}></i>} bg="#FF6B6B" />
          </InputGroup>
        </Stack>
        </div>   

      </nav>
      
    </>
  );
};

export default Layout;
