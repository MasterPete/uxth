import React from 'react'
import { Topic, Content, BlueContent, ListWrapper, ListItem } from '../../components/SpeakerPage'
import SpeakerPage from '../../components/SpeakerPage'

export default () => (
  <SpeakerPage
    header={{
      firstName: 'JARED',
      lastName: 'SPOOL',
      subtitle: (
        <>
          is a <bold> Maker of Awesomeness at Center Centre/UIE </bold> and one of the leading experts
          in user experience.
        </>
      ),
    }}
    imagePath="/images/speakers/spk_JaredSpool@3x.png"
    contents={[
      <>
        <Topic>“The Evolution of a New UX Design Resolution”</Topic>
        <Content>
          Design works on many levels. We can zoom in to the screen level, looking directly at what in
          the interactions on a single screen or page. We can zoom out a little to look at an entire
          application’s design, understanding how screens work together. Or we can pull back to an
          organization level, working to connect applications and other services together.
          <br />
          <br />
          Looking at design through different levels of resolution helps us answer some important
          questions. Is there a difference between UX and UI, and if so, how does that change how teams
          should operate? What is the relationship between product design and service design? How do we
          start preparing for what comes next?
          <br />
          <br />
          In this entertaining talk, Jared explores the relationships between these new levels of
          resolution. He’ll introduce you to a level of design beyond the organization level and you how
          we’ll need to start designing beyond organizational boundaries, and what that implies. He’ll
          introduce you to the pioneers of this new design area, and explain the process by which
          designers everywhere will need to develop their expertise.
        </Content>
        <BlueContent>Jared will show you:</BlueContent>
        <ListWrapper>
          <ListItem>
            Where designers fall into the dangerous trap of thinking too narrowly about their career
          </ListItem>
          <ListItem>
            How there’s still a frontier of unsolved issues that pioneering designers need to explore
          </ListItem>
          <ListItem>
            What the relationship between pioneers, settlers, and town planners are, when it comes to
            design craft
          </ListItem>
        </ListWrapper>
      </>,
      <>
        <Topic>Workshop</Topic>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur cupiditate eaque quos nulla
          nihil illum aliquid soluta deserunt, architecto id est fugiat ab non asperiores. Officia earum
          quis doloribus.
        </Content>
      </>,
      <>
        <Topic>Biography</Topic>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur cupiditate eaque quos nulla
          nihil illum aliquid soluta deserunt, architecto id est fugiat ab non asperiores. Officia earum
          quis doloribus. Est!
        </Content>
      </>,
    ]}
  />
)

