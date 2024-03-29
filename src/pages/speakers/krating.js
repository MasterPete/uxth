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
      firstName: 'KRATING',
      lastName: 'POONPOL',
      subtitle: (
        <>
          is a <bold> Managing Partner of 500 TukTuks, </bold> Partner of 500
          Startups and Founder of Disrupt Technology Venture.
        </>
      ),
    }}
    imagePath="/images/speakers/spk_KRATING.png"
    contents={{
      talk: (
        <>
          <Topic>Designing Startup Engine</Topic>
          <Content>
            Successful startup Unicorns require 3 engines to success which are
            Customer Success Engine - Sale Engine - Cash to Cash engine. User
            Experience design plays a major role in how to make these engines
            work seamlessly and greatly contribute to startup’s growth.
            <br />
            <br />
            This talk will explore how UX design can drive startup’s business
            starting from customer success (helping them to get the most value
            and satisfaction from startup’s products/services), satisfied
            customers will advocate product/service and have high retention rate
            thus improving sale creating good cash to cash engine ( good return
            on money invested).
          </Content>
        </>
      ),
      biography: (
        <>
          <Topic>About Krating</Topic>
          <Content>
            Krating Poonpol is Thailand's Business Man of the Year 2016 and
            Asia21 Young Leader 2017 and currently Managing Partner of 500
            TukTuks - a micro VC fund with almost 50 M USD AUM. He invests in 52
            tech startups in Thailand and South East Asia such as FinAccel ( 30
            M USD series B), Omise ( first ICO Unicorn in the world ), Pomelo (
            19 M USD series B led by JD.com). His startup portcos raised over
            250 M USD in follow on funding and created more than 10,000 jobs in
            Thailand. He is also founder of Disrupt Technology Venture - a
            leading Innovation Factory and startup education program which
            graduated over 1,500 startup founders in Thailand. 70% of Thai
            startups that successfully raised fundings are Disrupt alumni and 6
            out of 10 top Thai tech startups in 2016 are Disrupt alumni. He is
            dubbed " Godfather of Thai Tech Startup" by e27, leading tech media
            of SEA. He is also ex-McKinsey consultant, ex- (Global lead) product
            marketing manager of Google Earth, ex-quantitative marketing lead of
            Google Asia Pacific, and private equity fund manager. He also serves
            on the board of Thailand Education Partners - an alliance of 11
            leading organizations in Education including Ministry of Education,
            Thai Chamber of Commerce, and so on to transform education in
            Thailand. Krating is also advisor to CEO of KBank, 2nd largest bank
            in Thailand on Digital Disruption.
            <br />
            <br />
            Krating graduated from Stanford Business School in 2007 , Kauffman
            Fellow Class 20, and is now attending the prestigious Tsinghua
            Belt&Road EMBA Program. He won Gold Medal in Thailand Physics
            Olympics, Bronze Medal in Thailand Mathematics Olympics, and Ranked
            3rd in Thailand National Mathematics Competition.
          </Content>
        </>
      ),
    }}
  />
)
