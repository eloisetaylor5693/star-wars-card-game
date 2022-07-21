import { gql, useQuery } from "@apollo/client";
import Board from "./components/Board";
import Card from "./components/Card";
import Starship from "./Starship";

const GET_STARSHIPS = gql`
  query root {
    allStarships {
      edges {
        node {
          id
          class: starshipClass
          name
          passengerCapacity: passengers
          maximumSpeed: maxAtmospheringSpeed
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

  // TODO shuffle array of spaceships
  const spaceships = data.allStarships.edges;

  const spaceshipCardsDealt: Starship[] = [];

  // TODO: currently just adds card on first load, need to draw the next card
  spaceshipCardsDealt.push(spaceships[0].node);

  return (
    <Board>
      {spaceshipCardsDealt.map((x) => {
        return <Card key={x.id} starship={x} />;
      })}
    </Board>
  );
}

export default App;
