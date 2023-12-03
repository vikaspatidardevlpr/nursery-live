const data = [
    {
        name:"About Gardening",
        content:[
            "Gardening is not just an activity – for some, it is a stress release. For others, it is an escape into a world filled with hope and joy.",
            "While some people tend to their gardens just to prevent their plants from dying, others treat their gardens with care and love.",
            "Gardening helps improve physical fitness, builds mental resilience, and also helps unleash creativity. When there is so much that gardening can do for you, there must be something you can do to make your garden special!",
            "These days, people are looking for more intelligent gardening solutions. We have an extensive collection of seeds, plants, implements, and decorations.",
            "These will definitely make your beautiful garden stand out.",
            "The world of gardening revolves around flowering plants, sacred trees, greens, and even vegetables. Differing needs dictate the kind of gardening plants and tools.",
            "Remember to keep in mind the dynamics of your garden when selecting your gardening equipment and plants.",
            "A variety of gardening tools and implements can make the job easier and more fun. Individual gardening essentials like pots, soil, and saplings can be selected as convenient. Alternatively, you may also opt for complete gardening set to get you going.",
            "The right kind of accessories for your garden will make your garden look alluring. They will also make your effort more fruitful.",
            "A well-maintained garden must have a handy pair of shears, rake, and sprinkler. Ensure you add these to your gardening kit. It is a novel way to add some glamour, color, and character to your garden. You can also use accessories like pebbles, toys, and birdhouses.",
            "NurseryLive brings you the best quality and the latest gardening implements, ideas, and resources to make your dream garden a reality. Now space, logistics, and knowledge are no barrier to owning your dream island of greens!"
        ]
    },
    {
        name:"Garden design",
        content:[
            "Gardening is not just an activity – for some, it is a stress release. For others, it is an escape into a world filled with hope and joy.",
            "While some people tend to their gardens just to prevent their plants from dying, others treat their gardens with care and love.",
            "Gardening helps improve physical fitness, builds mental resilience, and also helps unleash creativity. When there is so much that gardening can do for you, there must be something you can do to make your garden special!",
            "These days, people are looking for more intelligent gardening solutions. We have an extensive collection of seeds, plants, implements, and decorations.",
            "These will definitely make your beautiful garden stand out.",
            "The world of gardening revolves around flowering plants, sacred trees, greens, and even vegetables. Differing needs dictate the kind of gardening plants and tools.",
            "Remember to keep in mind the dynamics of your garden when selecting your gardening equipment and plants.",
            "A variety of gardening tools and implements can make the job easier and more fun. Individual gardening essentials like pots, soil, and saplings can be selected as convenient. Alternatively, you may also opt for complete gardening set to get you going.",
            "The right kind of accessories for your garden will make your garden look alluring. They will also make your effort more fruitful.",
            "A well-maintained garden must have a handy pair of shears, rake, and sprinkler. Ensure you add these to your gardening kit. It is a novel way to add some glamour, color, and character to your garden. You can also use accessories like pebbles, toys, and birdhouses.",
            "NurseryLive brings you the best quality and the latest gardening implements, ideas, and resources to make your dream garden a reality. Now space, logistics, and knowledge are no barrier to owning your dream island of greens!"
        ]
    }
]
const AboutPage = ()=>{
    return (
       <div className="flex justify-center">
        <div className="container px-4">
           {
            data.map((items,index)=><div key={index}>
            <h1 className="text-2xl font-semibold text-[#484848] my-2 mt-4">{items.name}</h1>
            {
                items.content.map((list,index)=> <p key={index} className="p-2 text-justify">{list}</p>)
            }
            </div>)
           }
        </div>

       </div>
    )
}

export default AboutPage;