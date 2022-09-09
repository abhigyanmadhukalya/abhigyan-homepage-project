import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title={'Flask Web App Template'}>
      <Container>
        <Title>
          Flask Web App <Badge>2022</Badge>
        </Title>
        <Paragraph>
          A Flask template to quickly create a web app for taking notes and
          modify the purpose of the webapp to fit the needs of the user.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/abhigyanmadhukalya/flask-web-app-template">
              GitHub <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Requirements</Meta>
            <span>
              <Link href="https://python.org">
                Python <ExternalLinkIcon />
              </Link>
            </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Flask, Flask-SQLAlchemy, Flask-Login</span>
          </ListItem>
        </List>

        <WorkImage
          src={'/images/works/flask-web-app-template.png'}
          alt={'Flask Web App Template'}
        />
      </Container>
    </Layout>
  )
}

export default Work
