import React from 'react'
import {
 Topic, Content, BlueContent, ListWrapper, ListItem 
} from '../../components/SpeakerPage'
import SpeakerPage from '../../components/SpeakerPage'

export default () => (
  <SpeakerPage
    header={{
      firstName: 'LIAM',
      lastName: 'HUTCHINSON',
      subtitle: (
        <>
          is a <bold> Senior Product & Design Strategist at ThoughtWorks. </bold>
        </>
      ),
    }}
    imagePath="/images/speakers/spk_LiamHutchinson.svg"
    contents={{
      talk: (
        <>
          <Topic>Everyone Is A Designer</Topic>
          <Content>
            Folks all around us make design decisions every day. We might not always be aware of them, and they might not be conscious of it. But the fact of the matter is, the design of a delightful customer experience doesn't come from a single person, nor does it come from a role (job title).
            <br />
            <br />
            How do we drop the "rockstar designer" attitude, drive shared understanding, embrace an inclusive and diverse process and make it our goal to help everyone become as excellent a designer as they can be? We'll ask these questions, but first, we'll start with why we should.
            <br />
            <br />
            This is a conversation about how we look at others when designing products and services. It's about the decisions we all make and how they have the potential to impact the design.
          </Content>
        </>
      ),
      biography: (
        <>
          <Topic>About Liam</Topic>
          <Content>
            Liam is an Experience Design & Strategy Consultant for ThoughtWorks, where he works with industry-leading (or disrupting) organisations to facilitate bolder think around customer experience and value. He helps teams to define ambitious strategy and enables teams to deliver on it.
            <br />
            <br />
            Passionate about the value design can bring, Liam spends a lot of time now coaching design teams and executives. He’s done this in both the UK and Bangkok, where he’s currently on a transfer.
            <br />
            <br />
            To help everyone to become better designers is Liam’s mission and he has spoken internationally on the subject of design at leading design and Agile conferences.
          </Content>
        </>
      ),
    }}
  />
)
