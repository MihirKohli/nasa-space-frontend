import React from 'react';
import { Box, Flex, Button,Divider} from '@chakra-ui/react';
import './navbar.css'
import {Link} from 'react-router-dom';

function NavbarOptions() {
  return (
    <Box bg="white" p={4} color="black" className="navbar-options" >
      <Flex alignItems="center" justifyContent="space-around">
        <Link to='/full_solar'>
          <Button fontSize="xl" fontWeight="bold" colorScheme="transparent" color="black">
            Full Solar 
          </Button>
        </Link>
        <Divider orientation='vertical' height='50px' borderColor={'black'} border={'1px'}/>
        <Link to='/partial_solar'>
          <Button fontSize="xl" fontWeight="bold" colorScheme="transparent" color="black">
            Partial Solar 
          </Button>
        </Link>
        <Divider orientation='vertical' height='50px' borderColor={'black'} border={'1px'}/>
        <Link to='/full_lunar'>
          <Button fontSize="xl" fontWeight="bold" colorScheme="transparent" color="black">
            Full Lunar 
          </Button>
        </Link>
        <Divider orientation='vertical' height='50px'borderColor={'black'} border={'1px'}/>
        <Link to='/partial_lunar'>
          <Button fontSize="xl" fontWeight="bold" colorScheme="transparent" color="black">
            Partial Lunar 
          </Button>
        </Link>
        <Divider orientation='vertical' height='50px' borderColor={'black'} border={'1px'}/>
        <Link to='/play'>
          <Button fontSize="xl" fontWeight="bold" colorScheme="transparent" color="black">
            Play
          </Button>
        </Link>

      </Flex>
    </Box>
  );
}

export default NavbarOptions;
