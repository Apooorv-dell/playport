import { Text, SimpleGrid } from "@chakra-ui/react";
import { GameQuery } from "../App";

import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}
const GamesGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      spacing={6}
      padding={10}
    >
      {isLoading &&
        skeleton.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GamesGrid;
