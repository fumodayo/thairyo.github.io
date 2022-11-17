import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Danabus">
    <Container>
      <Title>
        Danabus <Badge>2022-</Badge>
      </Title>
      <P>
        A website to track routes, view information about bus stops and be
        advertised for popular tourist attractions in the city while passing.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://react-trello-clone-a8e01.web.app/">
          https://react-trello-clone-a8e01.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Mapbox, ReactJS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/danabus-banner.png" alt="Danabus" />
      <WorkImage src="/images/works/danabus2.png" alt="Danabus" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
