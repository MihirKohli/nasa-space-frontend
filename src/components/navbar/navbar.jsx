import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <Box bg="black" p={4} >
      <Flex alignItems="center" justifyContent="center">
        <Link to='/'>
          <Button fontSize="30px" fontWeight="bold" colorScheme="transparent" color="white">
            Eclipse 
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

export default Navbar;
