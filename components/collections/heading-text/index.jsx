import Link from "next/link";
const HeadingTitle = ({route})=>{
    const pageName = route.slug?.replaceAll("-"," ");
    return (
        <div className="flex justify-center">
            <div className="container px-4">
               <div className="flex items-center">
                <Link href="/" className="text-red-500">Home</Link>
                <i className='bx bx-chevron-right text-lg block text-slate-500 mt-1'></i>
                <p className="text-slate-500">{pageName}</p>
               </div>
               <h1 className="text-3xl font-bold py-4 text-[#484848]">{pageName}</h1>
               <p><span className="font-semibold">Result: 81 products.</span> If you're a foodie looking to spice up your meals, look no further than our collection of exotic vegetable seeds at NurseryLive. From colorful peppers and. . . read more </p>

            </div>

        </div>
    )
}
export default HeadingTitle;