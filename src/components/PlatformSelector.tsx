import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatfroms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props{
    onSlelectPlatform: (platform:Platform)=> void;
    selectedPlatform: Platform | null
}

const PlatformSelector = ({onSlelectPlatform,selectedPlatform}:Props) => {
  const { data ,error} = usePlatfroms();
  if (error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
{selectedPlatform?.name||'Platfrom' }
      </MenuButton>
      <MenuList>


{data.map((platform)=> <MenuItem  onClick={()=> onSlelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem> )}       
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
