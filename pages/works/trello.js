import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Danabus">
    <Container>
      <Title>
        Trello <Badge>2022-</Badge>
      </Title>
      <P>A simple Trello Clone using latest Web standards.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://react-trello-clone-a8e01.web.app/">
            https://react-trello-clone-a8e01.web.app
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, ReactJS, MongoDB</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/thairyo/react-trello-clone">
            https://github.com/thairyo/react-trello-clone
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/trello-banner.png" alt="Danabus" />
      <WorkImage src="/images/works/trello.gif" alt="Danabus" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
