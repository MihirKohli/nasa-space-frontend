import React from 'react';
import { Box, Flex, Button} from '@chakra-ui/react';
import './navbar.css'
import {Link} from 'react-router-dom';

function NavbarOptions() {
  return (
    <Box bg="#7F00FF" p={4} color="black" className="navbar-options" >
      <Flex alignItems="center" justifyContent="space-around">
        <Link to='/solar'>
          <Button fontSize="xl" fontWeight="bold" colorScheme="transparent" color="black">
            Solar 
          </Button>
        </Link>
          
          <Button fontSize="xl" fontWeight="bold" colorScheme="transparent" color="black">
            Lunar
          </Button>
          <Button fontSize="xl" fontWeight="bold" colorScheme="transparent" color="black">
            Play
          </Button>

      </Flex>
    </Box>
  );
}

export default NavbarOptions;
