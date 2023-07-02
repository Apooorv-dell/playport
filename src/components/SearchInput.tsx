import { Input, InputGroup,InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";


export const SearchInput = () => {
  return (
    <InputGroup>
<InputLeftElement children={<BsSearch/>} mt={1}/>
      <Input

        borderRadius={10}
        placeholder="Search games..."
        variant="filled"
        size={"lg"}
      />
    </InputGroup>
  );
};
