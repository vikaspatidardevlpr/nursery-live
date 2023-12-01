import Image from "next/image";
import {
    Button,
} from "@chakra-ui/react";
const Blog = ()=>{
    return (
        <div className="flex justify-center">
        <div className="container">
          <h1 className="text-[20px] text-center py-8 font-semibold">
          From The Blog
          </h1>

          <div className="flex justify-between gap-8 px-6 flex-col lg:flex-row">
            <div className="shadow flex items-center flex-col">
                <Image src="/images/b-1.jpg" width={450} height={345} alt="b-1" />
                <h1 className="py-4 text-lg font-semibold w-4/5 text-center">Why PM Modi Planted Parijat Tree in Ayodhya?</h1>
                <button className="text-red-400 font-semibold pb-4">{"Read now >"}</button>
            </div>

            <div className="shadow flex items-center flex-col">
                <Image src="/images/b-2.jpg" width={450} height={345} alt="b-1" />
                <h1 className="py-4 text-lg font-semibold w-4/5 text-center">The Hidden Powers of Maghai Pan: More than Just a Chew</h1>
                <button className="text-red-400 font-semibold pb-4">{"Read now >"}</button>
            </div>


            <div className="shadow flex items-center flex-col">
                <Image src="/images/b-3.jpg" width={450} height={345} alt="b-1" />
                <h1 className="py-4 text-lg font-semibold w-4/5 text-center">Unleash the Beauty and Fragrance of Ranjai Plants</h1>
                <button className="text-red-400 font-semibold pb-4">{"Read now >"}</button>
            </div>
          </div>

        </div>
      </div>
    )

}
export default Blog;