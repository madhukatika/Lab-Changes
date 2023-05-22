import React from 'react'
import { ApolloProvider } from '@apollo/client'
import two from '../Clients/two'
import Countries from '../Components/Countries'
export default function CountriesPage() {
 return (
    <>
        <h3> Data from Apollo Server - https://countries.trevorblades.com/ </h3>
        <ApolloProvider client={two}>
         <Countries />
        </ApolloProvider>
    </>
  )
}