import React from 'react'
import styled from 'react-emotion'
import { AnchorButton } from './Button'
import mq, { breakpoints } from '../../utils/media-query'
import { GridRow } from './GridRow'

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
const FooterWrapper = styled.footer`
  margin-top: 80px;
`
const Body = styled.span`
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  margin: 0 16px;
`

const SponsorContainer = styled.div`
  margin: 0 auto;
  max-width: 890px;
`
const Image = styled.img`
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
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

const SponsorTitle = styled.p`
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  color: var(--color_almost_white);
  text-align: center;

  margin-top: 40px;
  margin-bottom: 10px;
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
          <SponsorTitle>Premier</SponsorTitle>
          <GridRow column={3} height={150}>
            <Image src="/images/sponsors/bridqeasia.png" />
            <Image src="/images/sponsors/thoughtworks.svg" />
            <Image src="/images/sponsors/kbtg.png" />
          </GridRow>
          <SponsorTitle>Executive</SponsorTitle>
          <GridRow column={4} height={100}>
            <Image src="/images/sponsors/sketch.svg" />
            <Image src="/images/sponsors/ntl.svg" />
            <Image src="/images/sponsors/odds.png" />
            <Image src="/images/sponsors/krungthai.png" />
          </GridRow>
          <SponsorTitle>Associate</SponsorTitle>
          <GridRow column={2} height={100} maxWidth="380px">
            <Image src="/images/sponsors/balsamiq.png" />
            <Image src="/images/sponsors/maqe.png" />
          </GridRow>
          <SponsorTitle>Partner</SponsorTitle>
          <GridRow column={5} height={100}>
            <Image src="/images/sponsors/rosenfeld.svg" />
            <Image src="/images/sponsors/foundation.svg" />
            <Image src="/images/sponsors/axure.svg" />
            <Image src="/images/sponsors/designup.png" />
            <Image src="images/sponsors/epam.svg" />
          </GridRow>
        </SponsorContainer>
        <FooterWrapper>
          <Ul>
            <Li>
              <Body>How to be apart of this UXTH Conference 2019,</Body>
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
              <Body>or getting more detail</Body>
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
