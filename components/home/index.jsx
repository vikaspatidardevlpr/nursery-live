import Layout from "../shared/layout";
import Hero from "./hero";
import SwiperCards from "../shared/swiper-cards";
import ImportedWinter from "../shared/imported-winter";
import Popular from "./popular";
import Tranding from "../shared/tranding";
import GardenDecor from "./garden-decor";
import Blog from "./blog";
import Pramotation from "./pramotion";
const Home = ()=>{
    return (
        <Layout>
            <Hero />
            <SwiperCards title="Value For Money - Upto 35% Off" />
            <ImportedWinter />
            <Popular />
            <Tranding />
            <GardenDecor />
            <Blog></Blog>
            <Pramotation />
        </Layout>
    )
}

export default Home;