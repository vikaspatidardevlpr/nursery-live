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
            <Hero></Hero>
            <SwiperCards title="Value For Money - Upto 35% Off"></SwiperCards>
            <ImportedWinter></ImportedWinter>
            <Popular></Popular>
            <Tranding></Tranding>
            <GardenDecor></GardenDecor>
            <Blog></Blog>
            <Pramotation></Pramotation>
        </Layout>
    )
}

export default Home;