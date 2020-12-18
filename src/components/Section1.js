import React from 'react'
import styled from 'react-emotion'
// import { AnchorButton } from './Button'
import mq, { breakpoints } from '../../utils/media-query'

const Section = styled.section`
  background: url('/images/hero-lg.png') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  // padding-top: 200px;
  // padding-bottom: 100px;
  ${mq.s} {
    padding-top: 160px;
    padding-bottom: 40px;
  }
`
const HeroText = styled.h1`
  font-weight: 200;
  font-style: italic;
  font-size: 36px;
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25);
  line-height: 1.2;
  margin-bottom: 40px;
`
const Body = styled.p`
  font-style: italic;
  font-size: 20px;
  font-weight: 300;
`
// const SmallerBody = styled.p`
//   font-style: italic;
//   font-size: 18px;
//   font-weight: 300;
//   margin-bottom: 64px;
// `
// const BodyHightlight = styled.p`
//   font-style: italic;
//   font-size: 20px;
//   color: #fff;
//   font-weight: 700;
// `
const HeroSectionTextWrapper = styled.div`
  color: var(--color_almost_white);
  width: 80%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); /* IE 9 */
  -webkit-transform: translate(-50%, -50%);
`
const Container = styled.div`
  max-width: var(--layout_width_size_large);
  padding: 0 var(--padding_size);
`

function Section1({ id }) {
  return (
    <Section id={id}>
      <Container>
        <HeroSectionTextWrapper>
          <HeroText>UXThailand Conference 2021 Coming Soon !</HeroText>
          <Body>Please, stay in touch with us</Body>
          {/* <AnchorButton
            href="https://book.uxth.co/conf2019/register"
            target="_blank"
            stretchOn={`${breakpoints.s}px`}
          >
            buy ticket
          </AnchorButton> */}
        </HeroSectionTextWrapper>
      </Container>
    </Section>
  )
}

export default Section1
