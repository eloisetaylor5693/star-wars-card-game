import styled from "styled-components";
import { Categories } from "../helpers/CategoryEnums";
import Starship from "../helpers/Starship";

// TODO: split stylings into separate file

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 532px;
  width: 320px;
  padding: 8px;
  border-radius: 4px;
  background-color: black;
`;

const CardHeading = styled.div`
  padding: 0.5rem 2rem;
  background-color: #ffc625;
`;

const StarShipStatsSection = styled.div`
  padding: 0.5rem 2rem;
  background-color: white;
  height: 100%;
  button:first-child {
    margin-top: 1.5rem;
  }
`;

const StarShipStat = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: #ffc625;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  width: 100%;
`;

const StarShipStatValue = styled.span`
  text-align: end;
`;

interface CardProps {
  starship: Starship;
  onClickingCategory?: (category: Categories) => void;
}

export const Card = ({
  starship,
  onClickingCategory = () => {},
  ...props
}: CardProps): JSX.Element => {
  return (
    <CardContainer {...props}>
      <CardHeading>
        <p>{starship.name}</p>
      </CardHeading>

      <img
        src="../assets/star-wars.webp"
        alt="star wars logo"
        width="320px"
        height="180px"
      />
      <StarShipStatsSection>
        <StarShipStat onClick={() => onClickingCategory(Categories.MAX_SPEED)}>
          Max Speed:{" "}
          <StarShipStatValue>{starship?.maximumSpeed || "?"}</StarShipStatValue>
        </StarShipStat>
        <StarShipStat
          onClick={() => onClickingCategory(Categories.CREDIT_COST)}
        >
          Credit Cost:{" "}
          <StarShipStatValue>
            {starship?.costInCredits || "?"}
          </StarShipStatValue>
        </StarShipStat>
        <StarShipStat onClick={() => onClickingCategory(Categories.PASSENGERS)}>
          Passengers:{" "}
          <StarShipStatValue>
            {starship?.passengerCapacity || "?"}
          </StarShipStatValue>
        </StarShipStat>
        <StarShipStat
          onClick={() => onClickingCategory(Categories.FILM_APPEARANCES)}
        >
          Film Appearances:{" "}
          <StarShipStatValue>
            {starship?.filmAppearances || "?"}
          </StarShipStatValue>
        </StarShipStat>
      </StarShipStatsSection>
    </CardContainer>
  );
};

export default Card;
