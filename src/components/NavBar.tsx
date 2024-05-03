import { HStack, Box, Heading} from "@chakra-ui/react"

import ColorModeSwitch from "./ColorModeSwitch"
import { SearchInput } from "./SearchInput"

interface Props{
  onSearch : (searchText:string)=>void
}

const NavBar = ({onSearch}:Props) => {
  return (
<HStack justifyContent={"space-between"} padding='10px'mb={5} marginY={'1rem'}>

 <Heading  fontFamily={'cursive'} color={'cyan'} mx={'1rem'}> Play<sub>Port</sub></Heading>
 <SearchInput onSearch={onSearch}/>
<Box display={'none'}>
<ColorModeSwitch/>
  </Box> 
  
</HStack>
  )
}

export default NavBar
