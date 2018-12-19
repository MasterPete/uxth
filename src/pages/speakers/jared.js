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
      firstName: 'JARED',
      lastName: 'SPOOL',
      subtitle: (
        <>
          is a <bold> Maker of Awesomeness at Center Centre/UIE </bold> and one
          of the leading experts in user experience.
        </>
      ),
    }}
    imagePath="/images/speakers/spk_JaredSpool.svg"
    contents={{
      talk: (
        <>
          <Topic>The Evolution of a New UX Design Resolution</Topic>
          <Content>
            Design works on many levels. We can zoom in to the screen level,
            looking directly at what in the interactions on a single screen or
            page. We can zoom out a little to look at an entire application’s
            design, understanding how screens work together. Or we can pull back
            to an organization level, working to connect applications and other
            services together.
            <br />
            <br />
            Looking at design through different levels of resolution helps us
            answer some important questions. Is there a difference between UX
            and UI, and if so, how does that change how teams should operate?
            What is the relationship between product design and service design?
            How do we start preparing for what comes next?
            <br />
            <br />
            In this entertaining talk, Jared explores the relationships between
            these new levels of resolution. He’ll introduce you to a level of
            design beyond the organization level and you how we’ll need to start
            designing beyond organizational boundaries, and what that implies.
            He’ll introduce you to the pioneers of this new design area, and
            explain the process by which designers everywhere will need to
            develop their expertise.
          </Content>
          <BlueContent>Jared will show you:</BlueContent>
          <ListWrapper>
            <ListItem>
              Where designers fall into the dangerous trap of thinking too
              narrowly about their career
            </ListItem>
            <ListItem>
              How there’s still a frontier of unsolved issues that pioneering
              designers need to explore
            </ListItem>
            <ListItem>
              What the relationship between pioneers, settlers, and town
              planners are, when it comes to design craft
            </ListItem>
          </ListWrapper>
        </>
      ),

      workshop: (
        <>
          <Topic>
            Design for Delight — Transforming Your Designs From Good To Great
          </Topic>
          <Content>
            A good design is usable, useful, and effective. A great design
            delights its users. Explore a framework that brings your users and
            customers pleasure, flow, and meaning through your work.
            <br />
            <br />
            Inspire your organization to go beyond shiny features, with products
            and services that deliver remarkable delight. Infuse your practices
            with design principles that focus on the value your team can deliver
            with a long-term perspective.
            <br />
            <br />
            Great designs bring customers pleasure, flow, and meaning through
            the experiences you deliver.
            <br />
            <br />
            Jared and Dana’s years of research into what makes great designs has
            uncovered the secrets of delightful products and services.
          </Content>
        </>
      ),

      biography: (
        <>
          <Topic>About Jared</Topic>
          <Content>
            If you’ve ever seen Jared speak about user experience (UX) design,
            you know that he’s probably the most effective and knowledgeable
            communicator on the subject today. He started working in the field
            of usability and user experience in 1978, before the terms
            "usability" and "UX" were ever associated with computers.
            <br />
            <br />
            While he led UIE, the industry research firm he started in 1988, the
            field of UX design emerged and Jared helped define what makes UX
            designers successful all over the world. UIE's world-class research
            organization produces conferences and workshops all over the world
            and for companies in every industry.
            <br />
            <br />
            In 2016, with Dr. Leslie Jensen-Inman, he opened Center Centre, a
            new school in Chattanooga, TN to create the next generation of
            industry-ready UX Designers. They created a revolutionary approach
            to vocational training, infusing Jared's decades of UX experience
            with Leslie's mastery of experience-based learning methodologies.
            UIE joined forces with Center Centre and now delivers the best
            professional development workshops, masterclasses, and conference in
            the UX Design industry.
            <br />
            <br />
            You'll also find him as the conference chair and keynote speaker at
            the annual UI Conference and UX Immersion Conference, and he manages
            to squeeze in a fair amount of writing time. He is author of the
            book, Web Usability: A Designer’s Guide and co-author of Web
            Anatomy: Interaction Design Frameworks that Work.
            <br />
            <br />
            You'll find his writing at uie.com. You can also follow his
            adventures on the Twitters at @jmspool, where he tweets daily about
            UX design, design strategy, design education, and the wondrous
            customer service habits of the airline industry.
          </Content>
        </>
      ),
    }}
  />
)
