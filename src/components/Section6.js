import React from 'react'
import styled from 'react-emotion'

const Section = styled.section`
  padding: 80px 0;
  background-image: linear-gradient(#000, var(--color_blur_dark));
  color: #fff;
`
const Container = styled.div`
  max-width: var(--layout_width_size_large);
  margin: 0 auto;
  padding: 0 var(--padding_size);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const VerticalLine = styled.div`
  height: 100px;
  background: var(--color_blue_light);
  width: 1px;
  border-radius: 50px;
  box-shadow: 0 2px 4px 0 rgba(var(--color_blue_light_shadow));
`
const Title = styled.h3`
  font-style: italic;
  font-size: 36px;
  color: var(--color_blue);
  font-weight: 200;

  margin-bottom: 16px;
`
const Description = styled.h4`
  font-style: italic;
  font-size: 20px;
  font-weight: 300;
  color: var(--color_grey_super_light);
`
const TextWrapper = styled.div`
  padding: 24px 0;
  text-align: center;
`

function Section6({ id }) {
  return (
    <Section id={id}>
      <Container>
        <VerticalLine />
        <TextWrapper>
          <Title>Two days to inspire and upskill</Title>
          <Description>
            The UX Thailand Conference 2019, held in Bangkok for an
            international audience
          </Description>
        </TextWrapper>
        <VerticalLine />
      </Container>
    </Section>
  )
}

export default Section6
