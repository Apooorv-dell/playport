import { HStack, Image, List, ListItem, Button, Spinner } from "@chakra-ui/react";
import useGenre, {Genre} from "../hooks/useGenres";
import getCroppedImaegUrl from "../services/image-url";


interface Props{
  onSelectGenre:(genre:Genre )=> void
}
const GenreList = ({onSelectGenre}:Props) => {
  const { data: genres, isLoading, error } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={getCroppedImaegUrl(genre.image_background)}
            />
            <Button onClick={()=> onSelectGenre(genre)}  marginLeft={4}  variant='link' fontSize="lg">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
