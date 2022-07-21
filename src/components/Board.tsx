import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";

const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("../assets/stars.jpeg");
`;

const GET_STARSHIPS = gql`
  query root {
    allStarships {
      edges {
        node {
          id,
          starshipClass,
          name,
          passengers,
          maxAtmospheringSpeed,
        }
      }
    }
  }
`;

const Board = (): JSX.Element => {
  // getting all spaceships
  const { loading, error, data } = useQuery(GET_STARSHIPS);

  // error handling
  if (loading) return <h1>'Loading...'</h1>;
  if (error) return <p>`Error! ${error.message}`</p>;


  // shuffle array of spaceships
  // pop item from array
  
  return <BoardContainer></BoardContainer>;
};

export default Board;
