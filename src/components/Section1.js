import React from 'react'
import styled from 'react-emotion'
import Button, { AnchorButton } from './Button'
import mq, { breakpoints } from '../../utils/media-query'
import isFlashSale from '../../utils/FeatureToggle'

const Section = styled.section`
  background: url('/images/hero-lg.png') no-repeat center center fixed;
  background-size: cover;

  padding-top: 200px;
  padding-bottom: 100px;
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
  margin-bottom: 80px;
`
const Body = styled.p`
  font-style: italic;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 64px;
`
const BodyHightlight = styled.p`
  font-style: italic;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
`
const HeroSectionTextWrapper = styled.div`
  color: var(--color_almost_white);
  max-width: 720px;
`
const Container = styled.div`
  max-width: var(--layout_width_size_large);
  margin: 0 auto;
  padding: 0 var(--padding_size);
`
const FlashsaleHighlight = styled.p`
  font-size: 20px;
  color: #d35400;
  font-weight: 700;
  margin-bottom: 24px;
`
function Section1({ id }) {
  return (
    <Section id={id}>
      <Container>
        <HeroSectionTextWrapper>
          <HeroText>
            A two-day conference for people who build world-class products.
          </HeroText>
          <BodyHightlight>23-24 February, 2019</BodyHightlight>
          <Body>
            Venue To Be Confirmed, (Central Bangkok, Near BTS/MRT station)
          </Body>
          {isFlashSale() && (
            <FlashsaleHighlight>
              FLASH SALE, UP TO 75% OFF ENDS 21/12
            </FlashsaleHighlight>
          )}
          <AnchorButton
            href="https://book.uxth.co/conf2019/register"
            target="_blank"
            stretchOn={`${breakpoints.s}px`}
            isFlashSales={isFlashSale()}
          >
            buy ticket
          </AnchorButton>
        </HeroSectionTextWrapper>
      </Container>
    </Section>
  )
}

export default Section1
