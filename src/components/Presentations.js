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
      'Looking at design through different levels of resolution helps us answer some important questions. Is there a difference between UX and UI, and if so, how does that change how teams should operate? What is the relationship between product design and service design? How do we start preparing for what comes next?',
    image: '/images/speakers/spk_JaredSpool.svg',
  },
  {
    slug: 'dana',
    time: '11:00 - 12:00',
    title: 'Democracy Is A Design Problem',
    name: 'DANA CHISNELL',
    detail:
      'Every great designed experience starts with the stories of individual humans. At the Center for Civic Design, Dana Chisnell and her team collected a thousand stories from U.S. voters over 5 years. The stories revealed two massive gaps in the process.',
    image: '/images/speakers/spk_DanaChisnell.svg',
  },
  {
    slug: 'john',
    time: '13:00 - 14:00',
    title: 'Continuous Design',
    name: 'JOHN CUTLER',
    detail:
      'Have we exchanged waterfalls for whirlpools? Are we sprinting—faster and faster—to nowhere In particular? Is “how do you do UX with Agile“ perhaps the wrong question?',
    image: '/images/speakers/spk_JohnCutler.svg',
  },
  {
    slug: 'melissa',
    time: '14:00 - 15:00',
    title: 'Escaping The Build Trap',
    name: 'MELISSA PERRI',
    detail:
      'Are you building what your customers want, or are you just building? When successful companies first started out, they had to constantly deliver value to understand what their users wanted. This grew their business. Many large companies that have been around for decades, or even newer startups that have found some stability, fall into a dangerous place called “The Build Trap”.',
    image: '/images/speakers/spk_MelissaPerri.svg',
  },
  {
    slug: 'liam',
    time: '15:00 - 16:00',
    title: 'Everyone Is A Designer',
    name: 'LIAM HUTCHINSON',
    detail:
      'How do we drop the "rockstar designer" attitude, drive shared understanding, embrace an inclusive and diverse process and make it our goal to help everyone become as excellent a designer as they can be? We\'ll ask these questions, but first, we\'ll start with why we should.',
    image: '/images/speakers/spk_LiamHutchinson.svg',
  },
  {
    slug: 'krating',
    time: 'xxx',
    title: 'Designing Startup Engine',
    name: 'KRATING POONPOL',
    detail:
      'Successful startup Unicorns require 3 engines to success which are Customer Success Engine - Sale Engine - Cash to Cash engine. User Experience design plays a major role in how to make these engines work seamlessly and greatly contribute to startup’s growth.',
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
    link: 'NO_LINK',
  },
  {
    slug: 'xxx',
    time: 'xxx',
    title: 'Lightning Talks',
    name: 'To be announced...',
    detail:
      'Have you ever wanted to step on stage but for whatever reason haven’t achieved that goal yet? This might be your chance. We’ll be opening a call for 10 minute lightning talks later in the year.',
    image: '/images/speakers/spk_LIGHTNING.png',
    link: {
      location: 'https://goo.gl/forms/KE1QzfujzVq6UlvH2',
      text: 'Submit your talk now!',
    },
  },
  {
    name: 'break',
  },
  {
    slug: 'jared-dana',
    time: 'xxx',
    title: 'Design for Delight — Transforming Your Designs From Good To Great',
    name: 'Jared Spool & Dana Chisnell',
    detail: 'A good design is usable, useful, and effective. A great design delights its users. Explore a framework that brings your users and customers pleasure, flow, and meaning through your work.',
    image: '/images/speakers/spk_JaredSpool&DanaChisnell.png',
  },
  {
    slug: 'chris',
    time: 'xxx',
    title: 'Collaborative Product Innovation',
    name: 'Chris Compston',
    detail:
      'In this full day workshop you will be combining User Story Mapping and Lean UX in a hands-on and collaborative way. Aligning understanding of your user\'s experiences, highlighting key pain points and working individually and in groups to ideate solutions.',
    image: '/images/speakers/spk_Chris.png',
  },
  {
    slug: 'jonny',
    time: 'xxx',
    title: 'Customer Learning Experiments for Product Managers',
    name: 'Jonny Schneider',
    detail:
      'Product managers/designers are often making important decisions in conditions of high uncertainty with incomplete information. In this workshop, you’ll learn to put customer learning to work by designing fast and effective experiments, so you can make better product decisions more confidently.',
    image: '/images/speakers/spk_JONNY.png',
  },
  {
    slug: 'john',
    time: 'xxx',
    title: 'Making Sense of Product Development (For Designers and Product Managers)',
    name: 'John Cutler',
    detail: (
      <>
        Software product development involves grappling with uncertainty. We do this every day when we focus, prioritize, break work down, and plan how we’ll introduce the product. Without this uncertainty, we wouldn’t have new and novel products to offer.
        <br />
        <br />
        During this workshop, John will teach you a number of valuable tools and practices to make sense of your product development effort.
      </>
    ),
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

const WorkshopInstruction = styled.p`
  font-size: 15px;
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
              <>
                <WorkshopLine />
                <WorkshopInstruction>
                  On Day 1 of the conference, you'll hear from each workshop facilitator about the details of their workshop. You'll then be able to sign up to the full-day workshop you'd like to attend.
                  <br />
                  <br />
                  Note: You can only attend 1 full-day workshop. Workshop capacity limits apply but we will do our best to ensure everyone attends their first choice.
                </WorkshopInstruction>
              </>
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
