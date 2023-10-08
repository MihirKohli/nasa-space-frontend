import React from 'react';
import './full_solar.css';
import partial_lunar from './partial_lunar.jpg';
import { Heading,Text } from '@chakra-ui/react';
import { Grid, GridItem, Box } from '@chakra-ui/react'


function PartialLunar() {
  return (
    <div className='responsive-container'>
      <Box position="relative" width="100%" overflow="hidden">
        

        <Grid
            h='auto'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(4, 1fr)'
            gap={4}
            className='responsive-container'
            >
            <GridItem colSpan={2} p={4}>
            <Heading as='h1' size='2xl' isTruncated color="white" className="chakra-heading-class" m={'3'}>
              Partial Solar Eclipse
            </Heading>
            <Text color="white" m={'3'}>
            A partial solar eclipse happens when the Moon passes between the Sun and Earth but the Sun, Moon, and Earth are not perfectly lined up. Only a part of the Sun will appear to be covered, giving it a crescent shape. During a total or annular solar eclipse, people outside the area covered by the Moon’s inner shadow see a partial solar eclipse.
            </Text>
            </GridItem>
            <GridItem colSpan={2} p={4} m={16}>
                <img src={partial_lunar} alt='partial' className="responsive-image"/>
            </GridItem>
            <GridItem colSpan={4} p={4}>
            <iframe
    src="https://www.youtube.com/embed/tgbNymZ7vqY"
    width="60%" 
    height="500px" 
    frameBorder="0"
    allowFullScreen
    title="YouTube Video"
    style={{ margin: '0 auto' }} 
  ></iframe>

            </GridItem>
            </Grid>
            </Box>
            <div className="stars"></div>
        <div className="twinkling"></div>
        <div class="clouds"></div>

    </div>
  );
}

export default PartialLunar;
