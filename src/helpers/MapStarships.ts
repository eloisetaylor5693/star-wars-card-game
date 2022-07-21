import Starship from "./Starship";

export const MapStarships = (data): Starship[] => {
  const graphQlNodes = data.allStarships.edges;

  return graphQlNodes
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
};

export default MapStarships;
