import Image from "next/image";
const data = [
    {
        name: "Bonsai Plants - Upto 25% Off",
        image: "/images/t-1.png"
    },
    {
        name: "Ceramic Planters - Starting ₹299",
        image: "/images/t-2.png"
    },
    {
        name: "Kokedama- Starting ₹249",
        image: "/images/t-3.png"
    },
    {
        name: "Month Wise Gardening - Upto 65% Off",
        image: "/images/t-4.png"
    }
]
const Tranding = () => {
    return (
       <div className="flex justify-center">
         <div className="container py-8 lg:pt-14">
            <h1 className="text-[20px] font-semibold text-center">Tranding</h1>
            <div className="flex mt-16 justify-around flex-wrap px-2 lg:px-0">
                {
                    data.map((item, index) => <div key={index} className="py-4 cursor-pointer flex items-center flex-col">
                        <Image src={item.image} width={300} height={100} className="rounded-full" />
                        <p className="text-center text-[#FF6B6B] font-semibold py-4">{item.name}</p>
                    </div>)
                }
            </div>
        </div>
       </div>
    )
}

export default Tranding;