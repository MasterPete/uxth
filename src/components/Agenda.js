import React from 'react'
import styled from 'react-emotion'
import SpeakerCard, { LunchBreak } from './SpeakerCard'

const speaker = {
  jared: {
    time: '10:00 - 11:00',
    title: 'The Evolution of a New UX Design Resolution',
    name: 'JARED SPOOL',
    detail:
      'is a Maker of Awesomeness at Center Centre/UIE and one of the leading experts in user experience.',
    image: '/images/spk_JaredSpool.svg',
  },
  dana: {
    time: '11:00 - 12:00',
    title: 'Democracy Is A Design Problem',
    name: 'DANA CHISNELL',
    detail:
      'is the Co-Founder of the Center for Civic Design and founding team member of President Obama’s US Digital Service.',
    image: '/images/spk_DanaChisnell.svg',
  },
  john: {
    time: '13:00 - 14:00',
    title: 'Topic is mockup now',
    name: 'JOHN CUTLER',
    detail:
      'is Product Development Coach who is keenly focused on user experience and evidence-driven product development.',
    image: '/images/spk_JohnCutler.svg',
  },
  melissa: {
    time: '14:00 - 15:00',
    title: 'Escaping The Build Trap',
    name: 'MELISSA PERRI',
    detail:
      'is the CEO of Produx Labs; helping organisations become product-led. Melissa is currently writing a book about her experiences for O’Reilly.',
    image: '/images/spk_MelissaPerri.svg',
  },
  liam: {
    time: '15:00 - 16:00',
    title: 'Everyone Is A Designer',
    name: 'LIAM HUTCHINSON',
    detail:
      'is an Experience Design Consultant for ThoughtWorks where he helps organisations think more strategically about design.',
    image: '/images/spk_LiamHutchinson.svg',
  },
}

const Section = styled.section`
  background: var(--color_blur_dark);
  color: #fff;
  padding: 63px 0;
`
const Wrapper = styled.div`
  max-width: 860px;
  padding: 0 var(--padding_size);
  margin: 0 auto;
`
const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`
const Title = styled.p`
  font-size: 36px;
  font-weight: 200;
  font-style: italic;
  line-height: 45px;
  color: var(--color_blue);
  margin-bottom: 10px;
`

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
`

function Section8({ id }) {
  return (
    <Section id={id}>
      <Wrapper>
        <TitleWrapper>
          <Title>AGENDA</Title>
        </TitleWrapper>
        <Layout>
          <SpeakerCard speaker={speaker.jared} />
          <SpeakerCard speaker={speaker.dana} />
          <LunchBreak />
          <SpeakerCard speaker={speaker.john} />
          <SpeakerCard speaker={speaker.melissa} />
          <SpeakerCard speaker={speaker.liam} />
        </Layout>
      </Wrapper>
    </Section>
  )
}

export default Section8
