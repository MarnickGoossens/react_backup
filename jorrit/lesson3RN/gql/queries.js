import { gql } from "@apollo/client";

export const GET_CONTINENTS = gql`
query GetContinets{
    continents {
        id
        code
        name
        extra: countries {
            code
            name
        }
    }
}
`;
