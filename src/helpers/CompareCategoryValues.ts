import Starship from "./Starship";
import { Categories } from "./CategoryEnums";



// in order to plugin to the scoring, should return a value not the 
// string presented to the user, another function can map the user-presented values
//      return enum
const CompareCategoryValues = (
  category: Categories,
  playerOneCard: Starship | undefined,
  playerTwoCard: Starship
) => {
  if (!playerOneCard) {
    throw new Error("PlayerOne card not set");
  }
  
  const playerOneValue = playerOneCard[category] ?? 0;
  const playerTwoValue = playerTwoCard[category] ?? 0;

  if (playerOneValue === playerTwoValue) {
    return "Draw!";
  }

  return playerOneValue > playerTwoValue ? "You win!" : "You lose!";
};

export default CompareCategoryValues;
