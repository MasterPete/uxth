import React from 'react'
import { Topic, Content, BlueContent, ListWrapper, ListItem } from '../../components/SpeakerPage'
import SpeakerPage from '../../components/SpeakerPage'

export default () => (
  <SpeakerPage
    header={{
      firstName: 'MELISSA',
      lastName: 'PERRI',
      subtitle: (
        <>
          is the <bold> CEO of Produx Labs </bold> and author of Escaping The Build Trap
        </>
      ),
    }}
    imagePath="/images/speakers/spk_MelissaPerri.svg"
    contents={{
      talk: (
        <>
          <Topic>“The Evolution of a New UX Design Resolution”</Topic>
          <Content>
            Are you building what your customers want, or are you just building? When successful companies first started out, they had to constantly deliver value to understand what their users wanted. This grew their business. Many large companies that have been around for decades, or even newer startups that have found some stability, fall into a dangerous place called “The Build Trap”. They continue building feature after feature, without stopping to validate it’s what customer truly want and need. This is due in part to poor understanding of Product Strategy, Product Management, and how to manage teams. In order to get out of “The Build Trap”, businesses need to restructure their thinking to focus on finding value for the user through experimentation to achieve business goals. 

          </Content>
          
        </>
      ),
      biography: (
        <>
          <Topic>Biography</Topic>
          <Content>
            Melissa Perri is a Product Management CEO, teacher, and author. Melissa's day job is as the CEO of Produx Labs, a firm that helps growth stage and enterprise companies scale their product organizations. In partnership with Insight Venture, they are also training the next generation of Chief Product Officers through their CPO Accelerator program. Melissa also started the online product school Product Institute in 2016, and published Escaping the Build Trap with O'Reilly Media in 2018.          </Content>
        </>
      ),
    }}
  />
)