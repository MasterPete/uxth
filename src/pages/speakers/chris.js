import React from 'react'
import { Topic, Content, BlueContent, ListWrapper, ListItem } from '../../components/SpeakerPage'
import SpeakerPage from '../../components/SpeakerPage'

export default () => (
  <SpeakerPage
    header={{
      firstName: 'CHRIS',
      lastName: 'COMPSTON',
      subtitle: (
        <>
          is a <bold> Lead Product Consultant At ThoughtWorks. </bold> 
        </>
      ),
    }}
    imagePath="/images/speakers/spk_Chris.png"
    contents={{
      workshop: (
        <>
          <Topic>Collaborative Product Innovation</Topic>
          <Content>
            Opening up the design process can often be a daunting and challenging experience, but the short and long term benefits are enormously powerful for product innovation.
            <br />
            <br />
            In this full day workshop you will be combining User Story Mapping and Lean UX in a hands-on and collaborative way. Aligning understanding of your user's experiences, highlighting key pain points and working individually and in groups to ideate solutions.
            <br />
            <br />
            You will return to your own product teams able to gain a deeper understanding of your users and put their problems into an actionable priority order. Linking your new skills with a process of creative divergent and convergent thinking, you will be well on the path to greater product innovation.
          </Content>

        </>
      ),
      biography: (
        <>
          <Topic>About Chris</Topic>
          <Content>
            Chris is a Lead Consultant at ThoughtWorks with a focus on design coaching, experience strategy and product thinking.

            He's worked with both industry-leading organisations and disruptive startups across Europe and has been speaking at conferences on Agile and Lean practices for the past five years.
          </Content>
        </>
      ),
    }}
  />
)
