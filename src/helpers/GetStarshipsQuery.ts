import { gql } from "@apollo/client";

export const GET_STARSHIPS = gql`
  query root {
    allStarships {
      edges {
        node {
          id
          class: starshipClass
          name
          passengerCapacity: passengers
          maximumSpeed: maxAtmospheringSpeed
          costInCredits
          filmConnection {
            filmAppearances: totalCount
          }
        }
      }
    }
  }
`;