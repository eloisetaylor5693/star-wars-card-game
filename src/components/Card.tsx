import styled from "styled-components";
import Starship from "../Starship";

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
  div:first-child {
    margin-top: 1.5rem;
  }
`;

const StarShipStat = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: #ffc625;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
`;

const StarShipStatValue = styled.span`
  text-align:end
`;

interface CardProps {
  starship: Starship;
}

export const Card = ({ starship, ...props }: CardProps): JSX.Element => {
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
        <StarShipStat>
          Max Speed: <StarShipStatValue>{starship.maximumSpeed}</StarShipStatValue>
        </StarShipStat>
        <StarShipStat>
          Credit Cost: <StarShipStatValue>{starship.costInCredits}</StarShipStatValue>
        </StarShipStat>
        <StarShipStat>
          Passengers: <StarShipStatValue>{starship.passengerCapacity}</StarShipStatValue>
        </StarShipStat>
        <StarShipStat>
          Film Appearances: <StarShipStatValue>{starship.filmAppearances}</StarShipStatValue>
        </StarShipStat>
      </StarShipStatsSection>
    </CardContainer>
  );
};

export default Card;
