import NextLink from 'next/link'
import {
  Box,
  Text,
  Container,
  Divider,
  Heading,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as={'h1'}>Not Found</Heading>
      <Text>The page you&aps;re looking for is not available.</Text>
    </Container>
  )
}
