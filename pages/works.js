import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-items'

import thumnFlaskApp from '../public/images/works/flask-web-app-template.png'

const Works = () => {
  return (
    <Container>
      <Heading as={'h3'} fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid column={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="flask-web-app-template"
            title={'Flask Web App Template'}
            thumbnail={thumnFlaskApp}
          >
            A Flask note taking app template for further use.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
