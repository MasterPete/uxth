import React from 'react'
import styled from 'react-emotion'
import mq from '../../utils/media-query'

const SpeakerContentBox = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 180px) minmax(200px, 1fr);
  grid-gap: 30px;

  ${mq.m} {
    grid-gap: 20px;
  }
`
const SpeakerWrapper = styled.div`
  display: grid;
  grid-template-columns: 220px auto;
  grid-gap: 30px;

  ${mq.m} {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`

const Time = styled.p`
  margin-left: auto;
  text-align: right;
  font-weight: 400;
  font-style: italic;
  font-size: 24px;
  color: var(--color_blue);
  align-self: center;
`
const SpeakerTime = styled(Time)`
  margin-top: 20px;
  align-self: baseline;
`

const SpeakerImage = styled.img`
  width: 100%;
  background-image: linear-gradient(to top right, var(--color_blue_light), var(--color_blue));
  ${mq.s} {
    margin-left: 0px;
  }
`

const SpeakerDetailWrapper = styled.div``

const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
  font-style: italic;
  line-height: 1.2;
  letter-spacing: normal;
  color: var(--color_blue);
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25);
`
const Name = styled.h2`
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  color: var(--color_blue);
  line-height: 2.2;
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25);
`

const Detail = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #e8e8e8;
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25);
  span {
    color: var(--color_blue);
    text-decoration: underline;
    cursor: pointer;
    :hover {
      color: var(--color_white);
    }
  }
`

const BreakText = styled.div`
  border: 1px solid rgba(248, 248, 248, 0.2);
  border-width: 1px 0;
  display: flex;
  max-width: 900px;
  width: 100%;
  align-items: center;
  color: var(--color_blue);
  font-size: 24px;
  font-weight: 200;
  font-style: italic;
  padding: 20px 0;
`

function LunchBreak() {
  return (
    <SpeakerContentBox>
      <Time>12:00 - 13:00</Time>
      <BreakText>Lunch Time</BreakText>
    </SpeakerContentBox>
  )
}

function SpeakerCard({ speaker }) {
  return (
    <SpeakerContentBox>
      <SpeakerTime>{speaker.time}</SpeakerTime>
      <SpeakerWrapper>
        <SpeakerImage src={speaker.image} alt="" />
        <SpeakerDetailWrapper>
          <Title>{speaker.title}</Title>
          <Name>{speaker.name}</Name>
          <Detail>
            {speaker.detail} <span>Get to know more</span>
          </Detail>
        </SpeakerDetailWrapper>
      </SpeakerWrapper>
    </SpeakerContentBox>
  )
}

export default SpeakerCard
export { LunchBreak }
