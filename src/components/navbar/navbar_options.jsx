import React from 'react';
import { Box, Flex, Button} from '@chakra-ui/react';
import './navbar.css'
import {Link} from 'react-router-dom';

function NavbarOptions() {
  return (
    <Box bg="#7F00FF" p={4} color="black" className="navbar-options" >
      <Flex alignItems="center" justifyContent="space-around">
        <Link to='/full_solar'>
          <Button fontSize="xl" fontWeight="bold" colorScheme="transparent" color="black">
            Full Solar 
          </Button>
        </Link>
        <Link to='/partial_solar'>
          <Button fontSize="xl" fontWeight="bold" colorScheme="transparent" color="black">
            Partial Solar 
          </Button>
        </Link>
        <Link to='/full_lunar'>
          <Button fontSize="xl" fontWeight="bold" colorScheme="transparent" color="black">
            Full Lunar 
          </Button>
        </Link>
        <Link to='/partial_lunar'>
          <Button fontSize="xl" fontWeight="bold" colorScheme="transparent" color="black">
            Partial Lunar 
          </Button>
        </Link>
          <Button fontSize="xl" fontWeight="bold" colorScheme="transparent" color="black">
            Play
          </Button>

      </Flex>
    </Box>
  );
}

export default NavbarOptions;
