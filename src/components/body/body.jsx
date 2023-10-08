import './body.css'
import { Box } from '@chakra-ui/react';
import './glitch.scss'


function Body() {
  return (
    <div>
      <Box position="relative" width="100%" height="100vh" overflow="hidden">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div class='title'>
      <h1 class="glitch" data-text="Experience the world of Eclipses">Experience the world of Eclipses</h1>
       </div>
      </Box>
    </div>
  );
}

export default Body;
