import Image from "next/image";
import {
    Button,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

const data = [
    {
        name: "Ranunculus Flower Bulbs",
        image: "/images/im-1.jpg"
    },
    {
        name: "Hyacinth Flower Bulbs",
        image: "/images/im-2.jpg"
    },
    {
        name: "Tulip Flower Bulbs",
        image: "/images/im-3.jpg"
    },
    {
        name: "Daffodil Flower Bulbs",
        image: "/images/im-4.jpg"
    },
    {
        name: "Iris Flower Bulbs",
        image: "/images/im-5.jpg"
    },
    {
        name: "Gladiolus Flower Bulbs",
        image: "/images/im-6.jpg"
    }
]
const ImportedWinter = () => {
    const router = useRouter();
    const pathName = router.pathname?.includes("/collections");
    const handler = (title)=>{
        const titleFormat = title.replaceAll(" ","-");
            pathName ? router.push(titleFormat) : router.push(`collections/${titleFormat}`)
    }
    return (
       <div className="flex justify-center">
         <div className="container py-8 lg:pt-0">
            <h1 className="text-[20px] font-semibold text-center">Imported Winter Flower Bulbs</h1>
            <div className="flex mt-4 justify-around flex-wrap px-2 lg:px-0">
                {
                    data.map((item, index) => <div key={index} className="py-4 cursor-pointer" onClick={()=>handler(item.name)}>
                        <Image src={item.image} width={175} height={100} className="rounded-full" />
                        <p className="text-center text-[#FF6B6B] font-semibold py-4">{item.name}</p>
                    </div>)
                }
            </div>
            <div className="flex justify-center">
                <Button
                    variant="solid"
                    fontSize="sm"
                    w="fit-content"
                    color="white"
                    bg="#FF6B6B"
                >
                    View More
                </Button>
            </div>
        </div>
       </div>
    )
}

export default ImportedWinter;