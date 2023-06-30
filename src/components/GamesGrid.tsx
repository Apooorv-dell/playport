import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";





const GamesGrid = () => {
  const {games, error}= useGames()
 
  return (
    <>
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </>
  );
};

export default GamesGrid;
