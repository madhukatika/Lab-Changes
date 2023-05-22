import React from 'react'
import { ApolloProvider } from '@apollo/client'
import three from '../Clients/three'
import Continent from '../Components/continent'

export default function ContinentPage() {
 return (
    <>
        <h3> Data from Apollo Server - https://continent.trevorblades.com/ </h3>
        <ApolloProvider client={three}>
         <Continent/>
        </ApolloProvider>
    </>
  )
}