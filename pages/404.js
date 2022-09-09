import NextLink from 'next/link'
import {
  Box,
  Image,
  Text,
  Container,
  Divider,
  Heading,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as={'h1'} align="center" fontSize={100} fontFamily={'mono'}>
        404
      </Heading>
      <Heading as={'h2'} align="center">
        Not Found
      </Heading>
      <Text align={'center'}>
        The page you&apos;re looking for is not available.
      </Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme={'teal'}>Return to Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
