// import { Grid, GridItem, Show, Flex, Box } from "@chakra-ui/react";
// import NavBar from "./components/NavBar";
// import GamesGrid from "./components/GamesGrid";
// import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
// import PlatformSelector from "./components/PlatformSelector";

// import SortSelector from "./components/SortSelector";
// import GameHeading from "./components/GameHeading";
import SingleGame from "./components/SingleGame";

import { Platform } from "./hooks/useGames";
import { Route, Routes } from "react-router-dom";

import useGames from "./hooks/useGames";
import Dashboard from "./components/Dashboard";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { data: games, error, isLoading } = useGames(gameQuery);



  return (
    <>
     

      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              games={games}
              isLoading={isLoading}
              error={error}
              gameQuery={gameQuery}
              OnSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              OnSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              OnSelectSearch={(searchText) =>
                setGameQuery({ ...gameQuery, searchText })
              }
              OnSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          }
        />
        <Route path="/games/:id" element={<SingleGame games={games} />} />
      </Routes>
    </>
  );
}

export default App;
