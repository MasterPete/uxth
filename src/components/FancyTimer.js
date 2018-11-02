import React from 'react'
import styled from 'react-emotion'
import Timer from './Timer'
import mq from '../../utils/media-query'

const labelHeight = '30px'

const Container = styled.div``
const NumberLabel = styled.span`
  font-size: 4em;
  font-weight: 800;
  font-style: italic;
  color: #fff;
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25);
  line-height: 1;
`
const ColonLabel = styled(NumberLabel)`
  font-size: 2em;
  align-self: center;
  margin-bottom: ${labelHeight};
`
const Label = styled.label`
  font-size: 1.125em;
  font-weight: 200;
  font-style: italic;
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25);
  min-height: ${labelHeight};
  color: #fff;
`
const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 6em;
  margin: 0 1em;
`
const RowWrapper = styled.div`
  display: flex;
  font-size: 16px;
  ${mq.s} {
    font-size: 8px;
  }
`

function FancyTimer() {
  return (
    <Container>
      <Timer>
        {({
          day, hour, min, sec,
        }) => (
          <RowWrapper>
            <LabelWrapper>
              <NumberLabel>{day}</NumberLabel>
              <Label>day</Label>
            </LabelWrapper>
            <ColonLabel>:</ColonLabel>
            <LabelWrapper>
              <NumberLabel>{hour}</NumberLabel>
              <Label>hours</Label>
            </LabelWrapper>
            <ColonLabel>:</ColonLabel>
            <LabelWrapper>
              <NumberLabel>{min}</NumberLabel>
              <Label>min</Label>
            </LabelWrapper>
            <ColonLabel>:</ColonLabel>
            <LabelWrapper>
              <NumberLabel>{sec}</NumberLabel>
              <Label>sec</Label>
            </LabelWrapper>
          </RowWrapper>
        )}
      </Timer>
    </Container>
  )
}

export default FancyTimer
