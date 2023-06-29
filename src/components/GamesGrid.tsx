import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";


interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/game")
      .then((res) => {
        setGames(res.data.results);
        console.log(res);
      })
      .catch((err) => setError(err.message));
  }, []);
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
