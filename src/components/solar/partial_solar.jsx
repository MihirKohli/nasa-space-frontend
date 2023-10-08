import React from 'react'
import { Grid, GridItem, Box } from '@chakra-ui/react'
import { Heading,Text } from '@chakra-ui/react'
import partial_solar from '../solar/partial-solar-eclipse.jpg'
import './partial_solar.css'

function PartialSolar() {
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
            A partial solar eclipse occurs when only a portion of the Sun is obscured by the Moon as viewed from Earth. This fascinating celestial event offers a captivating opportunity for scientific observation and public education. Although not as dramatic as a total solar eclipse, a partial eclipse still provides valuable insights into the alignment of celestial bodies and their interactions in space.

During a partial solar eclipse, a section of the Sun's disk remains visible, surrounded by the Moon's shadow. This phenomenon showcases a crescent-shaped Sun, offering a unique visual spectacle. Scientists and astronomers use partial solar eclipses to study the Sun's outer atmosphere and phenomena like sunspots with specialized instruments, deepening our understanding of solar dynamics.

For educational purposes, partial solar eclipses serve as excellent teaching moments, allowing students and the public to explore concepts related to astronomy, geometry, and celestial mechanics. Educators often organize safe viewing events, emphasizing the importance of proper eye protection to prevent any eye damage while observing the eclipse.

Public engagement during partial solar eclipses fosters curiosity and scientific inquiry, inspiring future astronomers and scientists. Understanding the mechanics behind partial eclipses not only enriches our knowledge of the solar system but also reinforces the significance of ongoing astronomical research in unraveling the mysteries of the universe.
            </Text>
            </GridItem>
            <GridItem colSpan={2} p={4} m={16}>
                <img src={partial_solar} alt='partial' className="responsive-image"/>
            </GridItem>
            <GridItem colSpan={4} p={4}>
            <iframe
    src="https://www.youtube.com/embed/QQdKYb_pAw8"
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
  )
}

export default PartialSolar;