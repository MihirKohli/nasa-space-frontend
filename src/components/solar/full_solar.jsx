import React from 'react';
import './full_solar.css';
import full_solar from './solar-eclipse.jpg';
import { Heading,Text, Divider } from '@chakra-ui/react';
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
            <Heading as='h1' size='2xl' isTruncated color="white" className="chakra-heading-class" m={'3'}>
            Full Solar Eclipse
            </Heading>
            <Text color="white" m={'3'}>
            A full solar eclipse, a remarkable celestial event, occurs when the Moon completely covers the Sun, casting a shadow on Earth and plunging a specific region into darkness. This awe-inspiring phenomenon offers a unique opportunity for scientific observation and public education. Studying solar eclipses provides invaluable insights into the mechanics of our solar system and fosters a deeper understanding of celestial movements.
            During a full solar eclipse, the Sun's corona, the outermost layer of its atmosphere, becomes visible to the naked eye, allowing scientists to conduct intricate studies of this normally elusive feature. This event also presents an excellent opportunity for educators to engage students and the public in hands-on learning experiences, fostering interest in astronomy and the natural world. Safety precautions are paramount when witnessing a solar eclipse; specialized eye protection or indirect viewing methods are essential to prevent eye damage.
            Educational institutions and astronomy enthusiasts often organize special events and workshops to explain the science behind solar eclipses, promoting scientific literacy and curiosity. Such events serve as a platform for discussing the cultural and historical significance of eclipses in different societies, enriching our knowledge of human civilization's relationship with the cosmos.
            </Text>
            </GridItem>
            <GridItem colSpan={2} p={4} m={16}>
                <img src={full_solar} alt='partial' className="responsive-image"/>
            </GridItem>
            <GridItem colSpan={4} p={4}>
            <iframe
    src="https://www.youtube.com/embed/S2U3a1xXv8k"
    width="70%" 
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
