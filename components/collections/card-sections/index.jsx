import {
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Checkbox,
  CheckboxGroup,
  Input,
  Select,
} from "@chakra-ui/react";
import Cards from "../../shared/cards";

const cardData = [
  {
    image: "/images/c-1.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title:
      "Top 4 Die Hard Succulents PackTop 4 Die Hard Succulents PackTop 4 Die Hard Succulents Pack",
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
  },
  {
    image: "/images/c-6.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title: "Top 4 Die Hard Succulents Pack",
    rate: 3,
    offerTitle: "4+ Offers Inside",
    review: "382",
  },
  {
    image: "/images/c-7.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title: "Top 4 Die Hard Succulents Pack",
    rate: 3,
    offerTitle: "4+ Offers Inside",
    review: "382",
  },
  {
    image: "/images/c-8.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title: "Top 4 Die Hard Succulents Pack",
    rate: 3,
    offerTitle: "4+ Offers Inside",
    review: "382",
  },
  {
    image: "/images/c-9.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title: "Top 4 Die Hard Succulents Pack",
    rate: 3,
    offerTitle: "4+ Offers Inside",
    review: "382",
  },
  {
    image: "/images/c-1.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title:
      "Top 4 Die Hard Succulents PackTop 4 Die Hard Succulents PackTop 4 Die Hard Succulents Pack",
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
  },
  {
    image: "/images/c-6.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title: "Top 4 Die Hard Succulents Pack",
    rate: 3,
    offerTitle: "4+ Offers Inside",
    review: "382",
  },
  {
    image: "/images/c-7.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title: "Top 4 Die Hard Succulents Pack",
    rate: 3,
    offerTitle: "4+ Offers Inside",
    review: "382",
  },
  {
    image: "/images/c-8.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title: "Top 4 Die Hard Succulents Pack",
    rate: 3,
    offerTitle: "4+ Offers Inside",
    review: "382",
  },
  {
    image: "/images/c-9.jpg",
    cutPrice: 458,
    price: 340,
    offer: "20%",
    title: "Top 4 Die Hard Succulents Pack",
    rate: 3,
    offerTitle: "4+ Offers Inside",
    review: "382",
  },
];

const CardSections = () => {
  return (
    <section className="flex items-center mt-8 flex-col">
      <div className="flex container px-4 gap-2 flex-col lg:flex-row">
        <div className="lg:w-60">
          <h1 className="font-semibold text-lg py-2">Filters</h1>
          <Divider />

          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton px="0px">
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-semibold"
                  >
                    Product type
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Checkbox my="2px">Combo Pack - Seeds (1)</Checkbox>
                <Checkbox my="2px">Seeds (80)</Checkbox>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton px="0px">
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-semibold"
                  >
                    Availability
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Checkbox my="2px">In stock (65)</Checkbox>
                <Checkbox my="2px">Out of stock (16)</Checkbox>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton px="0px">
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-semibold"
                  >
                    Price
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div className="flex items-center gap-2 px-0">
                  ₹ <Input placeholder="From" my="4px" />
                </div>
                <div className="flex items-center gap-2 px-0">
                  ₹ <Input placeholder="To" my="4px" />
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        {/* `############ view as design###########` */}
        <div className="p-2 lg:w-[80%]">
          <div className="flex justify-between">
            <div className="flex items-center">
              <h1 className="font-semibold w-28">Sort by</h1>
              <Select placeholder="Featured">
                <option value="featured">Featured</option>
                <option value="best selling">Best selling</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>

            <div className="flex items-center">
              <h1 className="font-semibold ">View as</h1>
              <i class="bx bx-grid-small text-5xl text-red-500"></i>
              <i class="bx bx-menu text-4xl"></i>
            </div>
          </div>
          {/* ########## card display ############ */}
          <div className="p-4 flex flex-wrap lg:gap-x-10 lg:gap-y-4 justify-center lg:justify-start">
                {
                    cardData.map((item,index)=><div className="lg:w-64 my-4 lg:h-[400px]">
                        <Cards data={item}></Cards>
                    </div>)
                }
          </div>
        </div>
      </div>
    </section>
  );
};
export default CardSections;
