import useData from "./useData";
import { GameQuery } from "../App";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Esrb_rating {
  id: number;
  name: string;
}
export interface shortScreenshots {
  id: number;
  image: string;
}
export interface Store {
  domain: string;
  games_count: number;
  id: number;

  name: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  genre: Genre[];

  esrb_rating: Esrb_rating;
  playtime: number;

  released: string;

  ratings_count: number;

  short_screenshots: shortScreenshots[];
  stores: { id: number; store: Store }[];

  updated: string;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
