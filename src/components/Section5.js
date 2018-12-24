import React from 'react'
import styled from 'react-emotion'
import Button, { AnchorButton } from './Button'
import mq, { breakpoints } from '../../utils/media-query'

const Section = styled.section`
  padding: 80px 0;
  min-height: 500px;
  background: #000 url('/images/sponsor-bg.png') no-repeat center center scroll;
  background-size: cover;
  color: var(--color_grey_super_light);
`
const Container = styled.div`
  padding: 0 var(--padding_size);
`
const Title = styled.h3`
  font-size: 36px;
  font-weight: 200;
  font-style: italic;
  color: var(--color_blue);
  margin: 0;
  strong {
    font-size: 48px;
    font-weight: 800;
  }
`
const SubTitle = styled.h4`
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
`
const HeaderWrapper = styled.header`
  text-align: center;
`
const FooterWrapper = styled.footer``
const Body = styled.span`
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  margin: 0 16px;
`

const SponsorContainer = styled.div`
  margin: 0 auto;
  padding: 60px 0;
`
const SponsorRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${mq.s} {
    flex-direction: column;
  }
`
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px;
`
const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: 85px;
`
const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mq.l} {
    flex-direction: column;
  }
`
const Li = styled.li`
  margin: 8px 0;
  ${mq.l} {
    width: 100%;
    text-align: center;
  }
`
const stretchSize = `${breakpoints.l}px`
function Section5({ id }) {
  return (
    <Section id={id}>
      <Container>
        <HeaderWrapper>
          <Title>
            A big <strong>thank you</strong> for support
          </Title>
          <SubTitle>Our partners in achieving our vision</SubTitle>
        </HeaderWrapper>
        <SponsorContainer>
          <SponsorRow>
            <ImageWrapper>
              <Image src="/images/sponsors/thoughtworks.svg" alt="" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src="/images/sponsors/bridqeasia.svg" alt="" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src="/images/sponsors/ntl.svg" alt="" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src="/images/sponsors/sketch.svg" alt="" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src="/images/sponsors/balsamiq.png" alt="" />
            </ImageWrapper>
          </SponsorRow>
          <SponsorRow>
            <ImageWrapper>
              <Image src="/images/sponsors/rosenfeld.svg" alt="" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src="/images/sponsors/foundation.svg" alt="" />
            </ImageWrapper>
            <ImageWrapper>
              <Image src="/images/sponsors/axure.svg" alt="" />
            </ImageWrapper>
          </SponsorRow>
        </SponsorContainer>
        <FooterWrapper>
          <Ul>
            <Li>
              <Body>Join us on this journey, to sponsor our vision</Body>
            </Li>
            <Li>
              <AnchorButton
                href="mailto:uxthconf@gmail.com?subject=We want to sponsor your vision!"
                stretchOn={stretchSize}
              >
                Contact us
              </AnchorButton>
            </Li>
            <Li>
              <Body>or to find out more</Body>
            </Li>
            <Li>
              <AnchorButton
                href="/files/UXTH_Conference_2019_Sponsor_Packdec.pdf"
                target="_blank"
                outline
                stretchOn={stretchSize}
              >
                Download Sponsorship Pack
              </AnchorButton>
            </Li>
          </Ul>
        </FooterWrapper>
      </Container>
    </Section>
  )
}

export default Section5
