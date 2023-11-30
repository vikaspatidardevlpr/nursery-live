import Image from "next/image";
import {
    Button,
} from "@chakra-ui/react";
const Popular = ()=>{
    return (
        <>
        <div className="flex justify-center">
            <div className="container">
            <h1 className="text-[20px] text-center py-8 font-semibold">Popular</h1>
        <div className="flex gap-2 px-8">
            <div className="w-[65%]  border">
              <div className=" h-96 p-8 bg-slate-500 bg-cover mb-6" style={{backgroundImage:"url('images/p-1.jpg')"}}>
                <h1 className="text-3xl font-semibold">A Living Gift - Upto 30% Off</h1>
                <p className="text-[20px] py-2">Express true emotion with a gift that grow forever</p>
                <Button
                    variant="solid"
                    fontSize="sm"
                    w="fit-content"
                    color="white"
                    bg="#FF6B6B"
                    mt="14px"
                    _hover={{
                        backgroundColor:"#FF6B6B",
                        boxShadow:"0px 1px 5px 1px #aaa"
                    }}
                >
                    Shop Now
                </Button>
              </div>
              <div className=" h-96 p-8 bg-slate-500 bg-cover" style={{backgroundImage:"url('images/p-2.jpg')"}}>
                <h1 className="text-3xl font-semibold">A Living Gift - Upto 30% Off</h1>
                <p className="text-[20px] py-2">Express true emotion with a gift that grow forever</p>
                <Button
                    variant="solid"
                    fontSize="sm"
                    w="fit-content"
                    color="white"
                    bg="#FF6B6B"
                    mt="14px"
                    _hover={{
                        backgroundColor:"#FF6B6B",
                        boxShadow:"0px 1px 5px 1px #aaa"
                    }}
                >
                    Shop Now
                </Button>
              </div>

            </div>
            <div className="w-[35%] border"></div>

        </div>
            </div>

        </div>
        
        </>
    )

}
export default Popular;