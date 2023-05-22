import { gql } from '@apollo/client'
const GET_EMPLOYEES = gql`

    query{
        employees{
            name,
            dept 
        }
    }
`
export default GET_EMPLOYEES