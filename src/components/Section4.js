import React from 'react'
import styled from 'react-emotion'
import mq from '../../utils/media-query'

const Section = styled.section`
  background: #000 url('/images/vision-bg.png') no-repeat center center scroll;
  background-size: cover;
  color: #fff;
`
const Container = styled.div`
  max-width: var(--layout_width_size_large);
  margin: 0 auto;
  padding: 96px var(--padding_size);
`
const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;

  ${mq.s} {
    grid-template-columns: 1fr;
  }
`
const Title = styled.p`
  font-size: 36px;
  font-weight: 200;
  font-style: italic;
  color: var(--color_blue);

  max-width: 400px;
  text-indent: -0.4em;
  margin-bottom: 96px;

  ${mq.s} {
    font-size: 32px;
    margin-bottom: 32px;
  }
`
const SubTitle = styled.p`
  font-size: 24px;
  font-style: italic;
  font-weight: 200;
  color: var(--color_blue);
  margin-bottom: 8px;

  ${mq.s} {
    font-size: 20px;
  }
`
const Body = styled.p`
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  color: var(--color_almost_white);

  margin-bottom: 16px;
`
const Line = styled.div`
  margin: 0 auto;
  bottom: 4px;
  height: 1px;
  width: 100px;
  box-shadow: 0 2px 4px 0 rgba(var(--__color_blue_light_shadow));
  background: var(--color_blue_light);
  left: calc((100% - 100px) / 2);
`
const ImageWrapper = styled.div`
  width: fit-content;
  margin-left: auto;
`
const Image = styled.img`
  margin-left: auto;
  max-width: 100%;
  width: 100%:
`

function Section4({ id }) {
  return (
    <Section id={id}>
      <Container>
        <Layout>
          <ImageWrapper>
            <Image src="/images/Diagram.svg" alt="" align="right" />
          </ImageWrapper>
          <div>
            <Title>“Empower locally, recognised globally.”</Title>
            <SubTitle>Our Vision</SubTitle>
            <Body>
              <strong>
                Our vision is for Thailand to be seen globally as a leader of great design for its
                citizens and the world. To do this, UXTH was born to upskill and inspire the
                community.
              </strong>
            </Body>
            <Body>
              UX Thailand is a non-profit organisation that began as a series of monthly meet-ups,
              focused on empowering the local community to do better design. Our conference is born
              to inspire and upskill but also to be recognised globally for this event.
            </Body>
            <Body>
              The money that is made is invested in further empowering the local community. We’ll
              use the revenue to provide more regular events like our monthly meetup, training
              courses throughout the year and hope to build relationships across APAC.
            </Body>
          </div>
        </Layout>
      </Container>
      <Line />
    </Section>
  )
}

export default Section4
