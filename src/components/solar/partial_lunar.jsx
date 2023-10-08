import React from 'react';
import './full_solar.css';
import partial_lunar from './lunar_eclipse.jpg';
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
              Partial Lunar Eclipse
            </Heading>
            <Text color="white" m={'3'}>
            A partial lunar eclipse occurs when only a portion of the Moon enters Earth's penumbra, the outer part of its shadow. Unlike a total lunar eclipse, where the Moon is completely immersed in Earth's umbra (central shadow), a partial lunar eclipse displays a segment of the Moon darkened by Earth's penumbra. This phenomenon arises due to the imperfect alignment of the Earth, Moon, and Sun during the eclipse event.
            During a partial lunar eclipse, the shaded portion of the Moon may appear slightly dimmer, creating a subtle but noticeable effect. The extent of darkening varies, depending on how deeply the Moon enters the penumbra. Partial lunar eclipses are more common than total lunar eclipses and are visible from a broader range of locations on Earth.
            Scientifically, partial lunar eclipses provide astronomers with opportunities to study the Earth-Moon-Sun system. By analyzing the gradual shading of the Moon and the subtle changes in its appearance, scientists gain insights into celestial mechanics and orbital dynamics. These observations contribute valuable data for refining our understanding of lunar and Earth sciences.
            Partial lunar eclipses also hold cultural significance, inspiring interest and curiosity among enthusiasts and the public. They often prompt discussions about astronomy, celestial phenomena, and the mechanics of eclipses. Educational institutions and astronomy organizations frequently organize events to facilitate public engagement, enhancing awareness of lunar eclipses and their scientific implications.
            </Text>
            </GridItem>
            <GridItem colSpan={2} p={4} m={16}>
                <img src={partial_lunar} alt='partial' className="responsive-image"/>
            </GridItem>
            <GridItem colSpan={4} p={4}>
            <iframe
    src="https://www.youtube.com/embed/lNi5UFpales"
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
