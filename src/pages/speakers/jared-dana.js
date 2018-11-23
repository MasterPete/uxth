import React from 'react'
import { Topic, Content, BlueContent, ListWrapper, ListItem } from '../../components/SpeakerPage'
import SpeakerPage from '../../components/SpeakerPage'

export default () => (
  <SpeakerPage
    header={{
      firstName: 'JARED &',
      lastName: 'DANA',
      subtitle: (
        <>
          Jared is a <bold> Maker of Awesomeness at Center Centre/UIE and</bold> Dana is the <bold> Co-Director of Center For Civic Design</bold>
        </>
      ),
    }}
    imagePath="/images/speakers/spk_JaredDana.svg"
    contents={{
            workshop: (
        <>
          <Topic>Design for Delight — Transforming Your Designs From Good To Great</Topic>
          <Content>
          A good design is usable, useful, and effective. A great design delights its users. Explore a framework that brings your users and customers pleasure, flow, and meaning through your work.
          <br />
          <br />
          Inspire your organization to go beyond shiny features, with products and services that deliver remarkable delight. Infuse your practices with design principles that focus on the value your team can deliver with a long-term perspective.
          <br />
          <br />
          Great designs bring customers pleasure, flow, and meaning through the experiences you deliver.
          <br />
          <br />
          Jared and Dana’s years of research into what makes great designs has uncovered the secrets of delightful products and services.
          </Content>
        </>
      ),

    }}
  />
)