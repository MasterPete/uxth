import React from 'react'
import styled from 'react-emotion'

const Section = styled.section`
  padding: 64px 0;
  background: var(--color_blur_dark);
  color: #fff;
`
const Label = styled.span`
  font-weight: 600;
  font-style: italic;
  font-size: 24px;
  color: var(--color_blue);
`
const Title = styled.p`
  font-size: 48px;
  font-style: italic;
  font-weight: 200;
  color: var(--color_blue);
  margin-bottom: 16px;
`
const SubTitle = styled.p`
  font-weight: 300;
  font-style: italic;
  font-size: 24px;
  margin-bottom: 24px;
`
const Body = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #e8e8e8;
`
const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px;
`
const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  margin: 0 auto;
`
const ContentBox = styled.div``

function Section7({ id }) {
  return (
    <Section id={id}>
      <Wrapper>
        <Layout>
          <ContentBox>
            <Label>Day 1</Label>
            <Title>INSPIRE</Title>
            <SubTitle>International Conference</SubTitle>
            <Body>
              A day of inspiring presentations from some of the industries
              leading minds. aiming to provoke thoughts and ideas for you to
              take back to your projects and organisations.
            </Body>
          </ContentBox>
          <ContentBox>
            <Label>Day 2</Label>
            <Title>HANDS-ON</Title>
            <SubTitle>Workshop</SubTitle>
            <Body>
              A selection of practical, hands-on workshops for you to put theory
              into practice, learning new skillls and techniques to help you
              drive more customer value.
            </Body>
          </ContentBox>
        </Layout>
      </Wrapper>
    </Section>
  )
}

export default Section7
