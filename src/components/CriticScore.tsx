import { Badge } from "@chakra-ui/react";
import { useEffect } from "react";


interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
useEffect(()=>{

  
},[])
 
  return (
    <>
      <Badge
        fontSize="20px"
        paddingX={2}
        borderRadius="4px"
        colorScheme={color}
      >
        {score}{" "}
      </Badge>
    </>
  );
};

export default CriticScore;
