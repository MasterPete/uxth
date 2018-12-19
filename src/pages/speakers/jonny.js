import React from 'react'
import {
  Topic,
  Content,
  BlueContent,
  ListWrapper,
  ListItem,
} from '../../components/SpeakerPage'
import SpeakerPage from '../../components/SpeakerPage'

export default () => (
  <SpeakerPage
    header={{
      firstName: 'JONNY',
      lastName: 'SCHNEIDER',
      subtitle: (
        <>
          is a <bold> Product Principle at ThoughtWorks </bold> and author of
          Understanding Design Thinking, Lean and Agile.
        </>
      ),
    }}
    imagePath="/images/speakers/spk_JONNY.png"
    contents={{
      workshop: (
        <>
          <Topic>Customer Learning Experiments for Product Managers</Topic>
          <Content>
            In a world where customer insight is valued more than ever,
            companies are putting customers first with ideas like user-centred
            design, and customer-first strategy. But product success is more
            than just meeting customer expectations, and, great product
            solutions can fail at any stage of the product development
            lifecycle, for all kinds of reasons.
            <br />
            <br />
            Product designers are often making important decisions in conditions
            of high uncertainty with incomplete information. In this workshop,
            you’ll learn to put customer learning to work by designing fast and
            effective experiments, so you can make better product decisions more
            confidently.
            <br />
            <br />
          </Content>
          <BlueContent>You'll learn to:</BlueContent>
          <ListWrapper>
            <ListItem>
              Break down problems/solutions into testable assumptions
            </ListItem>
            <ListItem>
              Decide the most important things to be learned from customers
            </ListItem>
            <ListItem>
              Define Metrics that Matter, to support evidence-based decision
              making
            </ListItem>
            <ListItem>Manage uncertainty with a scientific mindset</ListItem>
            <ListItem>
              Select the right customer experiment for the job at hand
            </ListItem>
            <ListItem>
              Embrace the lean mindset to test strategy through execution in
              minutes not months
            </ListItem>
            <ListItem>
              Implement a continuous and sustainable learning cadence in your
              product team
            </ListItem>
            <ListItem>
              Apply customer learning to an ever-evolving strategy
            </ListItem>
          </ListWrapper>
        </>
      ),
      biography: (
        <>
          <Topic>About Jonny</Topic>
          <Content>
            Jonny consults on product development and innovation management, and
            coaches teams to do their best work. He’s Head of Product Strategy
            and Design at ThoughtWorks, and author of Understanding Design
            Thinking, Lean, and Agile (O’Reilly, 2017).
            <br />
            <br />
            He loves getting to the bottom of stuff, making sense of it, and
            working with good people to solve worthwhile problems. From
            beginnings in interface development and experience design, to
            product management and design leadership, Jonny hones his craft as a
            consultant across a range of industries, and works mostly with big
            ol’ clunky enterprises, as well as scale-ups, small businesses, not
            for profit, and government organisations.
            <br />
            <br />
            He lives in Melbourne, works all over, and loves a nice brogue.
          </Content>
        </>
      ),
    }}
  />
)
