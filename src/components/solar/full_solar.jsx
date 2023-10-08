import React from 'react';
import './full_solar.css';
import full_solar from './solar-eclipse.jpg';
import { Heading,Text } from '@chakra-ui/react';
import { Grid, GridItem, Box } from '@chakra-ui/react'

function FullSolar() {
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
            <Heading as='h1' size='2xl' isTruncated color="white">
              Partial Solar Eclipse
            </Heading>
            <Text color="white">
            A full solar eclipse is a remarkable celestial event that captivates observers around the world. It occurs when the moon passes between the Earth and the Sun, perfectly aligning in a way that momentarily obscures the Sun's entire disk from view. During this awe-inspiring event, the sky darkens, stars become visible, and the temperature drops, creating an eerie and almost surreal atmosphere. What makes a full solar eclipse particularly striking is the appearance of the Sun's corona, a luminous halo of plasma that surrounds the obscured solar disk. This rare and dramatic phenomenon offers scientists valuable insights into the Sun's outer atmosphere and has cultural significance in many societies, often regarded as a symbol of cosmic wonder and mystery. Witnessing a full solar eclipse is an unforgettable experience, evoking a sense of awe and wonder at the grandeur of our solar system and the precision of celestial mechanics.</Text>
            </GridItem>
            <GridItem colSpan={2} p={4} mt={16}>
                <img src={full_solar} alt='partial' className="responsive-image"/>
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

export default FullSolar;
