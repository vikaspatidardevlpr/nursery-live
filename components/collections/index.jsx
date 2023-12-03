import Layout from "../shared/layout";
import HeadingText from "./heading-text";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import CardSections from "./card-sections";
import SwiperCards from "../shared/swiper-cards";
import ImportedWinter from "../shared/imported-winter";
import Tranding from "../shared/tranding";
import Pramote from "./pramote";
import AboutPage from "./about-page";
const Collections = ()=>{
    const router = useRouter();
    return (
            <Layout>
                <HeadingText route={router.query}></HeadingText>
                <CardSections></CardSections>
                <SwiperCards title="Best sellers"></SwiperCards>
                <Tranding></Tranding>
                <Pramote title={`Save 40% with ${router.query.slug} Solutions`}></Pramote>
                <Pramote title="You may also need"></Pramote>
                <ImportedWinter></ImportedWinter>
                <AboutPage></AboutPage>
            </Layout>
    )   

}

export default Collections;