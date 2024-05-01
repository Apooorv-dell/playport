import { Card, CardBody, Image, Heading,HStack} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImaegUrl from '../services/image-url';
import Emoji from "./Emoji";
import { useNavigate } from "react-router-dom";


interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  const navigate = useNavigate()
  return (
    <Card  onClick={ ()=> navigate(`/games/${game.id}`) }  >
      <Image src={getCroppedImaegUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} mb={3}>
        <PlatformIconList   platforms={game.parent_platforms.map((p)=> p.platform)}/>

        <CriticScore score= {game.metacritic}/>
        </HStack>
        <Heading fontSize="xl" marginBottom={.2}>{game.name} <Emoji rating={game.rating_top}/></Heading>

    
      </CardBody>
    </Card>
  );
};

export default GameCard;
