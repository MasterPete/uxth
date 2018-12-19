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
      firstName: 'DANA',
      lastName: 'CHISNELL',
      subtitle: (
        <>
          is the <bold> Co-Director of Center For Civic Design </bold> and was
          the founding member of Barack Obama's US Digital Service.
        </>
      ),
    }}
    imagePath="/images/speakers/spk_DanaChisnell.svg"
    contents={{
      talk: (
        <>
          <Topic>Democracy Is A Design Problem </Topic>
          <Content>
            Every great designed experience starts with the stories of
            individual humans. At the Center for Civic Design, Dana Chisnell and
            her team collected a thousand stories from U.S. voters over 5 years.
            The stories revealed two massive gaps in the process.
            <br />
            <br />
            First, people who administer elections and voters have very
            different mental models on the process of voting. The second gap was
            between privileged voters and burdened voters. These gaps explained
            why it’s harder than it should be to vote in the U.S. and showed
            that policies meant to make things better had unintended
            consequences that actually make it worse.
          </Content>
          <BlueContent>Takeaways from this talk:</BlueContent>
          <ListWrapper>
            <ListItem>
              A solid understanding of the gradual, continuous work it takes to
              work on complex design problems
            </ListItem>
            <ListItem>
              Why 8 participants is not enough to tell the full story of an
              experience
            </ListItem>
            <ListItem>
              It’s not about the map, it’s about what we learn in making the map
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
          <Topic>About Dana</Topic>
          <Content>
            Dana Chisnell has taught thousands of people how to experience the
            experience their users are having.
            <br />
            <br />
            She made a study of designing for delight over several years when
            she reached a point where her expertise on usability testing was
            just very unsexy. (She’s the co-author of Handbook of Usability
            Testing Second Edition.) Usability testing is a great tool for
            identifying frustrating points in a design, but what happens after
            that? She set out to understand what you do after you’ve eliminated
            all of the frustration with a design — surely, there must be
            something beyond satisfaction. Her delight framework goes beyond
            tickling the fancies of users (whatever that means) to looking at
            how to design for pleasure, flow, and meaning.
            <br />
            <br />
            Resting on her laurels after working for President Obama at the U.S.
            Digital Service (2014-16), Dana is a co-founder of the Center for
            Civic Design with Whitney Quesenbery, where her team works to ensure
            that every interaction people have with government is efficient,
            effective, and pleasant.
          </Content>
        </>
      ),
    }}
  />
)
