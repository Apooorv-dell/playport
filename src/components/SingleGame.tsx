import { useParams, useNavigate } from "react-router-dom";
import { Game } from "../hooks/useGames";
import {
  Grid,
  Box,
  GridItem,
  Center,
  Image,
  Heading,
  Text,
  Button,
  Icon,
  HStack,
  Link,

} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

import CriticScore from "./CriticScore";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface GameDes {
  id: number;
  description: string;
  website: string;
}
interface Props {
  games: Game[];
}

const SingleGame = ({ games }: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = games.filter((m) => m.id == Number(id));
  const [gameDes, setGameDes] = useState<GameDes>();
  console.log(game);

  useEffect(() => {
    apiClient
      .get(`https://api.rawg.io/api/games/${id}`)
      .then(({ data }) => setGameDes(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Button
        mx={"1rem"}
        my={"2rem"}
        onClick={() => navigate("/")}
        position={"fixed"}
        zIndex={"1"}
      >
        {" "}
        <Icon as={FaLongArrowAltLeft} />{" "}
      </Button>
      <Box
        bgImage={`URL(${game[0].background_image})`}
        backgroundSize={"cover"}
        width={"100%"}
        h={"50vh"}
        opacity={"50%"}
        filter={"blur(5px)"}
      ></Box>
      <Center>
        <Box width={"80vw"} pos={"relative"} bottom={"200px"}>
          <Grid gridTemplateColumns={"1f 1fr"} justifyContent={"center"}>
            <GridItem>
              <Image
                borderRadius={"1rem"}
                width={"50vw"}
                h={"60vh"}
                src={game[0].background_image}
              />
            </GridItem>
            <GridItem padding={"1rem"} color={"grey"}>
              <HStack>
                <Heading color={"white"} fontSize={"50px"}>
                  {game[0].name}
                </Heading>
                <CriticScore score={game[0].metacritic} />
              </HStack>
              <PlatformIconList
                platforms={game[0].parent_platforms.map((p) => p.platform)}
              />
              <Text my={"1rem"}>Released Date : {game[0].released}</Text>
              <Text my={"1rem"}>Playtime : {game[0].playtime}</Text>
              <Heading color={"white"}> Description</Heading>
              <Text my={"1rem"} color={"white"}>
                {gameDes?.description}
              </Text>
              <HStack>
                <Text>Offical Webiste -</Text>

                <Link href={gameDes?.website} color={"linkedin.300"}>
                  {gameDes?.website}
                </Link>
              </HStack>
            </GridItem>
          </Grid>
        </Box>
      </Center>

      <Box>
        <Heading fontSize={"30px"} padding={"2rem"}>
          Game SnapShots
        </Heading>
        <Grid
          gridTemplateColumns={"1fr 1fr 1fr"}
          padding={"2rem"}
          rowGap={"1rem"}
          columnGap={".5rem"}
        >
          {game[0].short_screenshots.map((ss) => (
            <Image key={ss.id} borderRadius={"1rem"} src={ss.image} />
          ))}
        </Grid>
      </Box>
      
    </>
  );
};

export default SingleGame;
