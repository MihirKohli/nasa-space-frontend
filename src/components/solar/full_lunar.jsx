import React from 'react';
import './full_solar.css';
import full_lunar from './partial_lunar.jpg';
import { Heading,Text } from '@chakra-ui/react';
import { Grid, GridItem, Box } from '@chakra-ui/react'

function FullLunar() {
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
              Full Lunar Eclipse
            </Heading>
            <Text color="white" m={'3'}>
            A full lunar eclipse, scientifically referred to as a total lunar eclipse, occurs when the Earth passes directly between the Sun and the Moon, causing the Earth's shadow to be cast upon the Moon. During this extraordinary celestial event, the Moon can take on a reddish or coppery hue, commonly known as a "blood moon." This phenomenon transpires due to Earth's atmosphere bending and refracting sunlight, allowing only the longer wavelengths, such as red and orange, to reach the Moon's surface.
            Total lunar eclipses are remarkable astronomical occurrences, providing scientists and astronomers with unique opportunities to study Earth's atmosphere. By analyzing the color and intensity of the light refracted onto the Moon, researchers gain insights into our planet's atmospheric composition. These observations contribute valuable data for atmospheric studies and deepen our understanding of Earth's atmospheric properties.
            In addition to their scientific significance, full lunar eclipses have cultural and historical importance in various societies around the world. They often feature prominently in myths, legends, and religious narratives, shaping the cultural heritage of diverse civilizations. Furthermore, total lunar eclipses captivate the public's interest, prompting organized viewing events and educational initiatives to enhance public awareness of astronomy and celestial phenomena.
            Overall, a full lunar eclipse serves as a powerful reminder of the intricate dance of celestial bodies in our solar system and fosters a sense of wonder and curiosity about the universe among people of all ages.
            </Text>
            </GridItem>
            <GridItem colSpan={2} p={4} m={16}>
                <img src={full_lunar} alt='partial' className="responsive-image"/>
            </GridItem>
            <GridItem colSpan={4} p={4}>
            <iframe
    src="https://www.youtube.com/embed/6YORyBZ7qJ8"
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

export default FullLunar;
