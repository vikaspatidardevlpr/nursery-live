import Image from "next/image";
import Link from "next/link"
const data = [
    {
        name:"Balcony and Terrace Garden",
        image:"/images/pramote-1.jpg"
    },
    {
        name:"Balcony and Terrace Garden",
        image:"/images/pramote-2.jpg"
    },
    {
        name:"Balcony and Terrace Garden",
        image:"/images/pramote-3.jpg"
    },
    {
        name:"Balcony and Terrace Garden",
        image:"/images/pramote-4.jpg"
    }
]
const Pramote = ({title})=>{
    return (
        <div className="flex justify-center">
            <div className="container px-4">
            <h1 className="text-[20px] font-semibold text-center">{title}</h1>
                <div className="flex justify-between py-12">
                        {
                            data.map((items,index)=><div key={index}>
                            <Image src={items.image} width={300} height={200} alt="image" />
                            <Link href={`${items.name.replaceAll(" ","-")}`} className="text-red-500 block font-semibold text-center py-4">{items.name}</Link>
                        </div>)
                        }
                </div>
            </div>

        </div>
    )

}

export default Pramote;