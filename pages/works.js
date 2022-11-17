import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbTrello from '../public/images/works/trello-banner.png'
import thumbDanabus from '../public/images/works/danabus-banner.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="danabus"
            title="City Bus Tracking"
            thumbnail={thumbDanabus}
          >
            A website to track routes, view information about bus stops and be
            advertised for popular tourist attractions in the city while
            passing.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="trello"
            title="Trello clone"
            thumbnail={thumbTrello}
          >
            Clone trello website
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
