import { HStack, Image, List, ListItem ,Button, Spinner,Heading } from "@chakra-ui/react";
import useGenre, {Genre} from "../hooks/useGenres"
import getCroppedImaegUrl from "../services/image-url";



interface Props{
  onSelectGenre:(genre:Genre )=> void;
  selectedGenre: Genre | null
}
const GenreList = ({onSelectGenre, selectedGenre}:Props) => {
  const { data: genres, isLoading, error } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
    <Heading fontSize='2xl' mx={'1rem'} mb={3}>Genres</Heading>
    <List >
      {genres.map((genre) => (
        <ListItem key={genre.id} mx={'1rem'} paddingY="5px">
          <HStack spacing={'2'}>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
              mr={3}
              src={getCroppedImaegUrl(genre.image_background)}
            />
            <Button textAlign="left" whiteSpace={"normal"}fontWeight={genre.id === selectedGenre?.id ? 'bold': 'normal'}  onClick={()=> onSelectGenre(genre)}    variant='link' fontSize="lg">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>

  );
};

export default GenreList;
