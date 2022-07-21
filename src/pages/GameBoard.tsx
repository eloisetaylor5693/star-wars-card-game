import { ApolloError, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { AllStarshipsContext } from "../AllStarshipsContext";
import Board from "../components/Board";
import Card from "../components/Card";
import { Categories } from "../helpers/CategoryEnums";
import { GET_STARSHIPS } from "../helpers/GetStarshipsQuery";
import MapStarships from "../helpers/MapStarships";
import Starship from "../Starship";

function GameBoard(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apolloError, setError] = useState<ApolloError | undefined>(undefined);
  const [starships, setStarships] = useState<Starship[]>();
  const [playerOneCard, setPlayerOneCard] = useState<Starship>();
  const [playerTwoCard, setPlayerTwoCard] = useState<Starship>();

  //   useEffect(() => {
  const { loading, error, data } = useQuery(GET_STARSHIPS);
  console.log("getting stars", data);
  // getting all spaceships

  setIsLoading(loading);
  setError(error);

  if (isLoading) return <h1>'Loading...'</h1>;

  if (apolloError) {
    return <p>`Error! ${apolloError.message}`</p>;
  }

  const allStarships = MapStarships(data);

  // popping from the array so that we can't accidentally draw a duplicate card
  const selectedCard = allStarships.pop();

//   console.log(allStarships);
//   setStarships(allStarships);

//   if (selectedCard) {
//     console.log(selectedCard);
//     setPlayerOneCard(selectedCard);
//   }

//   setIsLoading(false);
//   //   }, [isLoading, starships, apolloError]);

//   const onClickingCategory = (category: Categories, value: any) => {
//     console.log({ category: category, value: value });
//     // const allSpaceshipsContextData: Starship[] =
//     //   React.useContext(AllStarshipsContext);

//     // const playerTwoSelectedCard = allSpaceshipsContextData.pop();
//     // if (playerTwoSelectedCard) {
//     //   spaceshipCardsDealt.push(playerTwoSelectedCard);
//     // }
//   };

//   if (!playerOneCard || !starships) {
//     return <p>nothing</p>;
//   }

  return (
    <AllStarshipsContext.Provider value={starships}>
      <Board>
        <Card
          key={playerOneCard?.id}
          starship={playerOneCard}
          onClickingCategory={onClickingCategory}
        />
      </Board>
    </AllStarshipsContext.Provider>
  );
}

export default GameBoard;
