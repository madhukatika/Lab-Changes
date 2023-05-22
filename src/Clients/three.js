import { ApolloClient, InMemoryCache } from '@apollo/client'


const three = new ApolloClient({
    uri:'https://countries.trevorblades.com/',
    cache: new InMemoryCache()
})
export default three;