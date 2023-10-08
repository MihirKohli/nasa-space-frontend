import React from 'react';
import { Box, Flex, Space, Text, ChakraProvider, Button } from '@chakra-ui/react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <Box bg="black" p={4} color="#7F00FF">
      <Flex alignItems="center" justifyContent="center">
        <Link to='/'>
          <Button fontSize="xl" fontWeight="bold" colorScheme="transparent" color="#7F00FF">
            Eclipse 
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

export default Navbar;
