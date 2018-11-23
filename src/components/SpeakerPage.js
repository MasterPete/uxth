import React from 'react'
import styled from 'react-emotion'
import mq from '../../utils/media-query'

import Layout from './layout'
import Foot from './Foot'
import Tabs from './Tabs'

const Page = styled.div`
  background-image: linear-gradient(#000, var(--color_blur_dark));

  padding-top: 200px;
  padding-bottom: 100px;
  ${mq.s} {
    padding-top: 160px;
    padding-bottom: 40px;
  }
`

const SpeakerSection = styled.section`
  max-width: var(--layout_width_size_large);
  margin: 0 auto;
  padding: 0 var(--padding_size);
`

const Image = styled.img`
  width: 100%;
`

const SpeakerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 65px;
  ${mq.s} {
    padding-left: 0px;
  }
`

const FirstNameTitle = styled.h1`
  font-size: 100px;
  font-weight: 900;
  font-style: italic;
  line-height: 1.1;
  color: var(--color_blue);
  ${mq.s} {
    font-size: 40px;
  }
`
const LastNameTitle = styled(FirstNameTitle)`
  padding-left: 25px;
`

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 200;
  font-style: italic;
  color: var(--color_grey_super_light);
  width: 570px;
  margin-top: 20px;
  ${mq.s} {
    margin-top: 5px;
    font-size: 16px;
    width: 100%;
    word-wrap: break-word;
    font-weight: 300;
    font-style: normal;
    bold {
      font-weight: 600;
    }
  }
`

export const Topic = styled.h1`
  font-size: 36px;
  font-weight: 200;
  font-style: italic;
  color: var(--color_blue);
  line-height: 1.2;
  margin-bottom: 40px;
`

export const Content = styled.p`
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
  color: var(--color_grey_super_light);
  margin-bottom: 20px;
`

export const BlueContent = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: var(--color_blue);
  margin-bottom: 10px;
`

export const ListWrapper = styled.ul`
  list-style: circle outside none;
  padding-left: 20px;
`

export const ListItem = styled.li`
  font-size: 14px;
  font-weight: normal;
  font-style: italic;
  color: var(--color_grey_super_light);
  line-height: 2;
`

const NameText = styled.div`
  width: 335px;
  font-size: 48px;
  font-weight: 900;
  font-style: italic;
  color: var(--color_blur_dark);
  position: absolute;
  line-height: 1.1;
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25);
  ${mq.s} {
    font-size: 32px;
    width: 150px;
  }
`

const NameTextLeft = styled(NameText)`
  bottom: 20px;
  left: 20px;
  text-align: left;
`

const NameTextRight = styled(NameText)`
  bottom: 20px;
  right: 20px;
  text-align: right;
`

const NameImageLeft = styled.img`
  width: 640px;
  height: 365px;
  margin-right: 20px;
  ${mq.s} {
    width: 280px;
    height: 160px;
    margin-left: 0px;
  }
`

const NameImageRight = styled.img`
  width: 640px;
  height: 365px;
  margin-left: 20px;
  ${mq.s} {
    width: 280px;
    height: 160px;
    margin-left: 0px;
    margin-top: 20px;
  }
`

const ImageWrapper = styled.div`
  width: 640px;
  height: 365px;
  position: relative;
  ${mq.s} {
    width: 280px;
    height: 160px;
  }
`

const MobileFullNameWrapper = styled.div`
  ${mq.s} {
    position: relative;
  }
`

const Small = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
  ${mq.s} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

const Large = styled.div`
  ${mq.l} {
    display: flex;
  }
  ${mq.s} {
    display: none;
  }
`

const TabText = styled.span`
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25);
  color: var(--color_almost_white);
`
const ListRow = styled.ul`
  display: flex;
  padding: 22.5px 0;
`
const List = styled.li`
  margin: 0 16px;
  cursor: pointer;
  ${props => props.active
    && `
    border-bottom: 1px solid #fff;
  `};
`
function TabTitles({ onClick, currentTab }) {
  return (
    <>
    </>
  )
}

const SpeakerPage = ({ header, imagePath, contents }) => (
  <Layout>
    <Page>
      <SpeakerSection>
        <SpeakerWrapper>
          <Image src={imagePath} />
          <DetailWrapper>
            <Large>
              <MobileFullNameWrapper>
                <FirstNameTitle>{header.firstName}</FirstNameTitle>
                <LastNameTitle>{header.lastName}</LastNameTitle>
              </MobileFullNameWrapper>
              <Subtitle>
                {header.subtitle}
              </Subtitle>
            </Large>
            <Tabs contents={contents}>
              {({ currentTab, changeTab }) => (
                <>
                  <ListRow>
                    {
                      contents.talk &&
                        <List active={currentTab === 'talk'}>
                          <TabText onClick={() => changeTab('talk')}>Talk</TabText>
                        </List>
                    },
                    {
                      contents.workshop &&
                        <List active={currentTab === 'workshop'}>
                          <TabText onClick={() => changeTab('workshop')}>Workshop</TabText>
                        </List>
                    }
                    <List active={currentTab === 'biography'}>
                      <TabText onClick={() => changeTab('biography')}>Biography</TabText>
                    </List>
                  </ListRow>
                  {contents[currentTab]}
                </>
              )}
            </Tabs>
          </DetailWrapper>
        </SpeakerWrapper>
      </SpeakerSection>
    </Page>
    <Foot />
  </Layout>
)

export default SpeakerPage
