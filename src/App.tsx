import { gql, useQuery } from "@apollo/client";
import React, { ReactEventHandler } from "react";
import { AllStarshipsContext } from "./AllStarshipsContext";
import Board from "./components/Board";
import Card from "./components/Card";
import { Categories } from "./helpers/CategoryEnums";
import MapStarships from "./helpers/MapStarships";
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

  const allSpaceships = MapStarships(data);

  // popping from the array so that we can't accidentally draw a duplicate card
  const selectedCard = allSpaceships.pop();
  const spaceshipCardsDealt: Starship[] = [];

  // TODO: currently just adds card on first load, need to draw the next card
  spaceshipCardsDealt.push(selectedCard);

  const onClickingCategory = (
    category: Categories,
    value: any
  ) => {
    console.log({category:category, value: value});
  };

  return (
    <AllStarshipsContext.Provider value={allSpaceships}>
      <Board>
        {spaceshipCardsDealt.map((x) => {
          return (
            <Card
              key={x.id}
              starship={x}
              onClickingCategory={onClickingCategory}
            />
          );
        })}
      </Board>
    </AllStarshipsContext.Provider>
  );
}

export default App;
