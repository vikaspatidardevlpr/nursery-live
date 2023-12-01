import Layout from "../shared/layout";
import Hero from "./hero";
import SwiperCards from "./swiper-cards";
import ImportedWinter from "./imported-winter";
import Popular from "./popular";
import Tranding from "./tranding";
import GardenDecor from "./garden-decor";
import Blog from "./blog";
import Pramotation from "./pramotion";
const Home = ()=>{
    return (
        <Layout>
            <Hero></Hero>
            <SwiperCards></SwiperCards>
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