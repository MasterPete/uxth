import React from 'react'
import styled from 'react-emotion'
import { LunchBreak, SpeakerCardWithoutTime, WorkshopLine } from './SpeakerCard'

const speakers = [
  {
    slug: 'jared',
    time: '10:00 - 11:00',
    title: 'The Evolution of a New UX Design Resolution',
    name: 'JARED SPOOL',
    detail:
      'is a Maker of Awesomeness at Center Centre/UIE and one of the leading experts in user experience.',
    image: '/images/speakers/spk_JaredSpool.svg',
  },
  {
    slug: 'dana',
    time: '11:00 - 12:00',
    title: 'Democracy Is A Design Problem',
    name: 'DANA CHISNELL',
    detail:
      'is the Co-Founder of the Center for Civic Design and founding team member of President Obama’s US Digital Service.',
    image: '/images/speakers/spk_DanaChisnell.svg',
  },
  {
    slug: 'john',
    time: '13:00 - 14:00',
    title: 'Continuous Design',
    name: 'JOHN CUTLER',
    detail:
      'John is currently working as a product evangelist at Amplitude who is keenly focused on user experience and evidence-driven product development.',
    image: '/images/speakers/spk_JohnCutler.svg',
  },
  {
    slug: 'melissa',
    time: '14:00 - 15:00',
    title: 'Escaping The Build Trap',
    name: 'MELISSA PERRI',
    detail:
      'is the CEO of Produx Labs; helping organisations become product-led. Melissa is currently writing a book about her experiences for O’Reilly.',
    image: '/images/speakers/spk_MelissaPerri.svg',
  },
  {
    slug: 'liam',
    time: '15:00 - 16:00',
    title: 'Everyone Is A Designer',
    name: 'LIAM HUTCHINSON',
    detail:
      'is an Experience Design Consultant for ThoughtWorks where he helps organisations think more strategically about design.',
    image: '/images/speakers/spk_LiamHutchinson.svg',
  },
  {
    slug: 'xxx',
    time: 'xxx',
    title: 'Designing Startup Engine',
    name: 'KRATING POONPOL',
    detail:
      'Krating Poonpol is Thailand’s Business Man of the Year 2016 and Asia21 Young Leader 2017 and currently Managing Partner of 500 TukTuks - a micro VC fund with almost 50 M USD AUM.',
    image: '/images/speakers/spk_KRATING.png',
  },
  {
    slug: 'xxx',
    time: 'xxx',
    title: 'APAC Slot',
    name: 'To be announced...',
    detail:
      'This year, we’ll be reaching out the the design communities of APAC, allowing them to nominate one presentation. We’ll then open this to a public vote and the winner will join us at UXTH.',
    image: '/images/speakers/spk_APAC_SLOT.png',
  },
  {
    slug: 'xxx',
    time: 'xxx',
    title: 'Lightning Talks',
    name: 'To be announced...',
    detail:
      'Have you ever wanted to step on stage but for whatever reason haven’t achieved that goal yet? This might be your chance. We’ll be opening a call for 10 minute lightning talks later in the year.',
    image: '/images/speakers/spk_LIGHTNING.png',
  },
  {
    name: 'break',
  },
  {
    slug: 'xxx',
    time: 'xxx',
    title: 'Design for Delight — Transforming Your Designs From Good To Great',
    name: 'Jared Spool & Dana Chisnell',
    detail: '',
    image: '/images/speakers/spk_JaredSpool&DanaChisnell.png',
  },
  {
    slug: 'xxx',
    time: 'xxx',
    title: 'Collaborative Product Innovation',
    name: 'Chris Compston',
    detail:
      'Chris is a Lead Consultant at ThoughtWorks with a focus on design coaching, experience strategy and product thinking.',
    image: '/images/speakers/spk_Chris.png',
  },
  {
    slug: 'xxx',
    time: 'xxx',
    title: 'Customer Learning Experiments for Product Managers',
    name: 'JONNY SCHNEIDER',
    detail:
      'Jonny consults on product development and innovation management, and coaches teams to do their best work. He’s Head of Product Strategy and Design at ThoughtWorks.',
    image: '/images/speakers/spk_JONNY.png',
  },
  {
    slug: 'xxx',
    time: 'xxx',
    title: 'To be Confirmed',
    name: 'John Cutler',
    detail:
      'John is currently working as a product evangelist at Amplitude who is keenly focused on user experience and evidence-driven product development.',
    image: '/images/speakers/spk_JohnCutler.svg',
  },
]

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
          <Title>Presentations & Workshops</Title>
        </TitleWrapper>
        <Layout>
          {speakers.map(
            speaker => (speaker.name === 'break' ? (
              <WorkshopLine />
            ) : (
              <SpeakerCardWithoutTime speaker={speaker} />
            )),
          )}
        </Layout>
      </Wrapper>
    </Section>
  )
}

export default Section8
