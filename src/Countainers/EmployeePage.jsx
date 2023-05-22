import React from 'react'
import { ApolloProvider } from '@apollo/client'
import one from '../Clients/one'
import Employees from '../Components/Employees'
export default function EmployeePage() {
 return (
    <>
      <h3> Data from Apollo Server - http://localhost:4000 </h3>
        <ApolloProvider client={one}>
          <Employees />
        </ApolloProvider>
    </>
  )
}