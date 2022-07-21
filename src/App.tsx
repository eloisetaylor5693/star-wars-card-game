import { gql, useQuery } from "@apollo/client";
import { AllStarshipsContext } from "./AllStarshipsContext";
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
          costInCredits
          filmConnection {
            filmAppearances: totalCount
          }
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

  const graphlqlSpaceshipNodes = data.allStarships.edges;

  const allSpaceships = graphlqlSpaceshipNodes
    .map((x) => {
      return {
        ...x.node,

        // TODO: fix the film connection querying (filmConnection is undefined)
        filmAppearances: 0, //x['filmConnection'].totalCount
      };
    })
    // shuffling array
    .sort(() => {
      return 0.5 - Math.random();
    });

  // popping from the array so that we can't accidentally draw a duplicate card
  const selectedCard = allSpaceships.pop();
  const spaceshipCardsDealt: Starship[] = [];

  // TODO: currently just adds card on first load, need to draw the next card
  spaceshipCardsDealt.push(selectedCard);

  return (
    <AllStarshipsContext.Provider value={allSpaceships}>
      <Board>
        {spaceshipCardsDealt.map((x) => {
          return <Card key={x.id} starship={x} />;
        })}
      </Board>
    </AllStarshipsContext.Provider>
  );
}

export default App;
