import Layout from "../shared/layout";
import Hero from "./hero";
import SwiperCards from "./swiper-cards";
import ImportedWinter from "./imported-winter";
import Popular from "./popular";
const Home = ()=>{
    return (
        <Layout>
            <Hero></Hero>
            <SwiperCards></SwiperCards>
            <ImportedWinter></ImportedWinter>
            <Popular></Popular>
        </Layout>
    )
}

export default Home;