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
      <StarShipStatsSection></StarShipStatsSection>
    </CardContainer>
  );
};

export default Card;
