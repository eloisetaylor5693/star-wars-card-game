import { gql, useQuery } from "@apollo/client";
import Board from "./components/Board";
import Card from "./components/Card";

const GET_STARSHIPS = gql`
  query root {
    allStarships {
      edges {
        node {
          id
          starshipClass
          name
          passengers
          maxAtmospheringSpeed
        }
      }
    }
  }
`;

function App() {
  // getting all spaceships
  const { loading, error, data } = useQuery(GET_STARSHIPS);

  // error handling
  if (loading) return <h1>'Loading...'</h1>;
  if (error) return <p>`Error! ${error.message}`</p>;

  // shuffle array of spaceships
  // pop item from array

  return (
    <Board>
      <Card />
    </Board>
  );
}

export default App;
