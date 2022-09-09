import NextLink from 'next/link'
import {
  Link,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioYear, BioSection } from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a self-taught Developer based in India
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as={'h2'} variant="page-title">
              Abhigyan Madhukalya
            </Heading>
            <p>Student ( Developer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-flex"
              borderRadius="full"
              src="images/abhigyanmadhukalya.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as={'h3'} variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Abhigyan is a novice self-taught Developer and Student of{' '}
            <NextLink href="https://narayanaschools.in" passHref scroll={false}>
              <Link>Narayana Group of Schools</Link>
            </NextLink>{' '}
            from Assam, India. He has a knack for learning new technologies
            quickly and apply them effectively in required fields. When not
            online, he loves learning about the world around him.{' '}
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="cyan">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as={'h3'} variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2005</BioYear>
            Born in Jorhat (জোৰহাত), Assam.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed Basic Education from Narayana e-Techno School, Guwahati
            (গুৱাহাটী).
          </BioSection>
          <BioSection>
            <BioYear>Presently</BioYear>
            Higher Secondary Studies from Narayana e-Techno School, Guwahati
            (গুৱাহাটী).
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as={'h3'} variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Music, Nature,
            <Link href="https://https://osu.ppy.sh/users/29473136">
              {' '}
              osu!,{' '}
            </Link>
            Designing, Gazing at clouds
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
