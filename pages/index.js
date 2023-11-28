import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/shared/layout";



const Home = ()=>{
    return (
        <ChakraProvider>
           <Layout></Layout>
        </ChakraProvider>
    )
}
export default Home;