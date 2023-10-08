import './body.css'
import { Box } from '@chakra-ui/react';


function Body() {
  return (
    <div>
      <Box position="relative" width="100%" height="100vh" overflow="hidden">
      <div className="stars"></div>
      <div className="twinkling"></div>
      </Box>
    </div>
  );
}

export default Body;
