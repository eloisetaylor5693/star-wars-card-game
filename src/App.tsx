import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Board from "./components/Board";
import Card from "./components/Card";
import { Categories } from "./helpers/CategoryEnums";
import CompareCategoryValues from "./helpers/CompareCategoryValues";
import { GET_STARSHIPS } from "./helpers/GetStarshipsQuery";
import MapStarships from "./helpers/MapStarships";
import Starship from "./helpers/Starship";

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

  useEffect(() => {
    if (!isLoadingPage || graphqlQueryIsLoading || playerOneCard) {
      return;
    }

    if (error) {
      setIsLoadingPage(false);
      return;
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

  const onClickingCategory = (category: Categories) => {
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
      {error && <p>`Error! ${error.message}`</p>}
      {isLoadingPage && <p>`Loading...`</p>}
      {gameResult && <GameResulText>{gameResult}</GameResulText>}
      <CardSection>
        <Card
          key={playerOneCard?.id}
          starship={playerOneCard}
          onClickingCategory={onClickingCategory}
        />

        {playerTwoCard && (
          <Card key={playerTwoCard?.id} starship={playerTwoCard} />
        )}
      </CardSection>
    </Board>
  );
}

export default App;
