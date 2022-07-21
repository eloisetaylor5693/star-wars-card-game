import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import styled from "styled-components";
import { AllStarshipsContext } from "./AllStarshipsContext";
import Board from "./components/Board";
import Card from "./components/Card";
import { Categories } from "./helpers/CategoryEnums";
import CompareCategoryValues from "./helpers/CompareCategoryValues";
import { GET_STARSHIPS } from "./helpers/GetStarshipsQuery";
import MapStarships from "./helpers/MapStarships";
import Starship from "./Starship";

const CardSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const GameResulText = styled.h1`
  color: white;
`;

function App() {
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(true);
  const [starships, setStarships] = useState<Starship[]>([]);
  const [playerOneCard, setPlayerOneCard] = useState<Starship>();
  const [playerTwoCard, setPlayerTwoCard] = useState<Starship>();
  const [gameResult, setGameResult] = useState<string>("");

  // getting all spaceships
  const {
    loading: graphqlQueryIsLoading,
    error,
    data,
  } = useQuery(GET_STARSHIPS);

  useMemo(() => {
    console.log("getting stars", {
      isLoading: isLoadingPage,
      graphqlQueryIsLoading: graphqlQueryIsLoading,
      playerOneCard: playerOneCard,
    });

    if (!isLoadingPage || graphqlQueryIsLoading || playerOneCard) {
      return;
    }

    if (error) {
      setIsLoadingPage(false);
      return <p>`Error! ${error.message}`</p>;
    }

    const allStarships = MapStarships(data);

    // popping from the array so that we can't accidentally draw a duplicate card
    const selectedCard = allStarships.pop();

    setStarships(allStarships);

    if (selectedCard) {
      setPlayerOneCard(selectedCard);
    }
    setIsLoadingPage(false);
  }, [graphqlQueryIsLoading, isLoadingPage, playerOneCard, starships]);

  const onClickingCategory = (category: Categories, value: any) => {
    console.log({ category: category, value: value });
    const playerTwoSelectedCard = starships.pop();
    if (playerTwoSelectedCard) {
      setPlayerTwoCard(playerTwoSelectedCard);

      const result = CompareCategoryValues(
        category,
        playerOneCard,
        playerTwoSelectedCard
      );
      setGameResult(result);
    }
    setIsLoadingPage(true);
  };

  if (!playerOneCard || !starships) {
    return null;
  }

  return (
    <Board>
      {gameResult && <GameResulText>{gameResult}</GameResulText>}
      <CardSection>
        <Card
          key={playerOneCard?.id}
          starship={playerOneCard}
          onClickingCategory={onClickingCategory}
        />

        {playerTwoCard && (
          <Card
            key={playerTwoCard?.id}
            starship={playerTwoCard}
            onClickingCategory={onClickingCategory}
          />
        )}
      </CardSection>
    </Board>
  );
}

export default App;
