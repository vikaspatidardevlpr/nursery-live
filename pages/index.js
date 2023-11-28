import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/shared/layout";
import HomeComponent from '../components/Home';


const Home = ()=>{
    return (
        <ChakraProvider>
            <HomeComponent></HomeComponent>
        </ChakraProvider>
    )
}
export default Home;