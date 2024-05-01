import { GameQuery } from "../App";
import { Grid, GridItem, Show, Flex, Box } from "@chakra-ui/react";

import NavBar from "./NavBar";
import GamesGrid from "./GamesGrid";
import GenreList from "./GenreList";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import GameHeading from "./GameHeading";

import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";
import { Game } from "../hooks/useGames";
interface Props {
  gameQuery: GameQuery;
  OnSelectGenre: (genre: Genre) => void;
  OnSelectSearch: (searchText: string) => void;
  OnSelectSortOrder: (sortOrder: string) => void;
  OnSelectPlatform: (platform: Platform) => void;
  games: Game[];
  isLoading: boolean;
  error: string;
}

const Dashboard = ({
  gameQuery,
  OnSelectGenre,
  OnSelectSearch,
  OnSelectPlatform,
  OnSelectSortOrder,
  games,
  isLoading,
  error,
}: Props) => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px, 1fr ",
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={(searchText) => OnSelectSearch(searchText)} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => OnSelectGenre(genre)}
              // setGameQuery({ ...gameQuery, genre }
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={10}>
            <GameHeading gameQuery={gameQuery} />
            <Flex mb={1.5}>
              <Box mr={7}>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSlelectPlatform={(platform: Platform) =>
                    OnSelectPlatform(platform)
                  }
                />
              </Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) => OnSelectSortOrder(sortOrder)}
              />
            </Flex>
          </Box>
          <GamesGrid
            games={games}
            isLoading={isLoading}
            error={error}
            // gameQuery={gameQuery} 
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
