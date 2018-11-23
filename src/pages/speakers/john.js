import React from 'react'
import {
 Topic, Content, BlueContent, ListWrapper, ListItem 
} from '../../components/SpeakerPage'
import SpeakerPage from '../../components/SpeakerPage'

export default () => (
  <SpeakerPage
    header={{
      firstName: 'JOHN',
      lastName: 'CUTLER',
      subtitle: (
        <>
          is a <bold> Product Evangelist at Amplitude </bold> and prolific writer on product management and UX
        </>
      ),
    }}
    imagePath="/images/speakers/spk_JohnCutler.svg"
    contents={{
      talk: (
        <>
          <Topic>Continuous Design - How Not To Exchange Waterfalls for Whirlpools</Topic>
          <Content>
            Have we exchanged waterfalls for whirlpools? Are we sprinting—faster and faster—to nowhere In particular? Is “how do you do UX with Agile“ perhaps the wrong question?
            <br />
            <br />
            Design has always been about iteration, subtraction, addition, experimentation, and observation. That process defines who we are as designers. With manufacturing, there was the point-of-no-return, the date our design was “finalised“ and something got sent off to the manufacturer (or press). With software as a service (SaaS), however, we have no such constraints. We don’t need to operate feature factories, yet somehow we often do. So, let’s fix that!
            <br />
            <br />
            In this talk, we are going to get into the nitty-gritty of treating product development as an act of continuous design; not Agile. We’ll draw on design traditions, and explore how they heavily overlap with how we are able to work with our teams. And we’ll consider a reality where products and features are temporary solutions to long-standing problems (and what that means for design).
          </Content>
        </>
      ),

      workshop: (
        <>
          <Topic>Making Sense of Product Development (For Designers and Product Managers)

          </Topic>
          <Content>
          Software product development involves grappling with uncertainty. We do this every day when we focus, prioritize, break work down, and plan how we’ll introduce the product. Without this uncertainty, we wouldn’t have new and novel products to offer.

            <br />
            <br />
          During this workshop, John will teach you a number of valuable tools and practices to make sense of your product development effort including tools for:


            <br />
            <br />
            <ListWrapper>
            <ListItem>
              Prioritization

            </ListItem>
            <ListItem>
              Breaking down work while preserving the “big picture”

            </ListItem>
            <ListItem>
              Surfacing assumptions

            </ListItem>
            <ListItem>
              Establishing a design-friendly North Star Metric to guide your product development efforts

             </ListItem>
            <ListItem>
              Linking near-term work to long-term business value

             </ListItem>
          </ListWrapper>
          </Content>
        </>
      ),

      biography: (
        <>
          <Topic>About John</Topic>
          <Content>
            John Cutler is keenly focused on user experience and evidence-driven product development.  He mixes and matches various methodologies — jobs-to-be-done, Lean UX, Lean Startup, customer development, and design thinking — to help teams deliver lasting outcomes for their customers.
            <br />
            <br />
            John is currently working as a product evangelist at Amplitude As a former UX researcher at AppFolio, a product manager at Zendesk, Pendo.io, AdKeeper and RichFX, a startup founder, and a product team coach, John has a perspective that spans individual roles, domains, and products.
            <br />
            <br />
            His viral enthusiasm has been heard through speaking/teaching engagements at Front, Oredev, Mind The Product, Agile 2015, Heart of Agile Philadelphia (2016), and various ProductCamps (Vancouver, Los Angeles, Raleigh NC) and MeetUps (Santa Barbara, Los Angeles, New York).  John’s talk on Feature Factories was voted one of the Top 10 Product Talks of 2017. In 2018,
            <br />
            <br />
            Mixing in some less-than-typical experiences — driving rickshaws in NYC, and touring the US with “five other weird creative people in a van playing music” — John blogs prolifically about collaboration, product development, diversity, UX research, lean startup, and user experience. Some notable posts include The Evolving Product Manager Role, Persona(s) Non Grata, 12 Signs You’re Working in a Feature Factory, and Stop Setting Up Product Roadmaps To Fail.
          </Content>
        </>
      ),
    }}
  />
)
