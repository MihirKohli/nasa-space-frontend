import {
    Box,
    Stack,
    HStack,
    VStack,
    Link,
    Divider,
    Image,
    Text,
    Button,
    IconButton,
    LinkProps
  } from '@chakra-ui/react';
  // Here we have used react-icons package for the icons
  import { FaGithub } from 'react-icons/fa';
  import { BsDiscord } from 'react-icons/bs';
  import logo from './logo.png'
  
  const Footer = () => {
    return (
      <Box backgroundColor={'white'} p={{ base: 5, md: 8 }}  width='100%'>
        <Stack
          spacing={{ base: 8, md: 0 }}
          justifyContent="space-between"
          direction={{ base: 'column', md: 'row' }}
        >
          <Box maxW="300px">
            <Link to='/'>
              <Image w="100px" src={logo} alt="" />
            </Link>
            <Text mt={2} color="gray.500" fontSize="md">
            Unveil the Secrets of the Cosmos  Explore the Dance of Eclipses
            </Text>
          </Box>
          <HStack
            spacing={4}
            d={{ base: 'none', sm: 'flex' }}
            justifyContent={{ sm: 'space-between', md: 'normal' }}
          >
            <VStack spacing={4} alignItems="flex-start">
              <Text fontSize="md" fontWeight="bold" color={"gray.500"}>
                Resources
              </Text>
              <VStack spacing={2} alignItems="flex-start" color="gray.500">
                <CustomLink href='https://science.nasa.gov/eclipses/'>Eclipse</CustomLink>
                <CustomLink href='https://science.nasa.gov/eclipses/nasa-research/'>Research</CustomLink>
                <CustomLink href='https://science.nasa.gov/eclipses/faq/'>Faq</CustomLink>
                <CustomLink href='https://science.nasa.gov/eclipses/history/'>History</CustomLink>
              </VStack>
            </VStack>
            <VStack spacing={4} alignItems="flex-start"color={"gray.500"} >
              <Text fontSize="md" fontWeight="bold">
                Kids
              </Text>
              <VStack spacing={2} alignItems="flex-start" color="gray.500">
                <CustomLink href='https://spaceplace.nasa.gov/search/eclipse/'>English</CustomLink>
                <CustomLink href='https://spaceplace.nasa.gov/search/eclipse/sp/'>Spanish</CustomLink>
                <CustomLink href='https://science.nasa.gov/earth/facts/'>Facts</CustomLink>
                <CustomLink href='https://spaceplace.nasa.gov/eclipse-snap/en/'>What is a Solar Eclipse?</CustomLink>
              </VStack>
            </VStack>
            <VStack spacing={4} alignItems="flex-start">
              <Text fontSize="md" fontWeight="bold" color={"gray.500"}>
                Other
              </Text>
              <VStack spacing={2} alignItems="flex-start" color="gray.500">
                <CustomLink href='https://science.nasa.gov/eclipses/geometry/'>Geometry Science</CustomLink>
                <CustomLink href='https://svs.gsfc.nasa.gov/14143#media_group_83344'>Essentials</CustomLink>
                <CustomLink href='https://www.youtube.com/watch?v=ExonFXrnHKE'>Safety Video</CustomLink>
                <CustomLink href='https://www.asc-csa.gc.ca/eng/astronomy/eclipses/'>CSA</CustomLink>
              </VStack>
            </VStack>
          </HStack>
        </Stack>
  
        <Divider my={4} />
  
        <Stack direction={{ base: 'column', md: 'row' }} spacing={3} justifyContent="space-between">
          <Text fontSize="md">
            Built by{' '}
            <Link
              href=""
              textDecoration="underline"
              _hover={{ textDecoration: 'underline' }}
              isExternal
            >
              Decepticons
            </Link>
          </Text>
          <Stack spacing={2} direction={{ base: 'column', md: 'row' }}>
            <Button leftIcon={<FaGithub />} as={Link} href="#" rounded="md" colorScheme="gray">
              Github Discussions
            </Button>
            {/* <Button
              leftIcon={<BsDiscord />}
              as={Link}
              href="#"
              rounded="md"
              color="white"
              bg="purple.500"
              _hover={{ bg: 'purple.600' }}
            >
              Discord community
            </Button> */}
          </Stack>
        </Stack>
      </Box>
    );
  };
  
  const CustomLink = ({ children, ...props }: LinkProps) => {
    return (
      <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
        {children}
      </Link>
    );
  };
  
  export default Footer;