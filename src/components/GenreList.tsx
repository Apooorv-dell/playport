import { HStack, Image, List, ListItem,Text} from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import getCroppedImaegUrl from '../services/image-url';

const GenreList = () => {
  const { data: genres } = useGenre();
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={getCroppedImaegUrl(genre.image_background)}

            />
          <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
