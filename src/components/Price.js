import React from 'react'
import styled from 'react-emotion'
import FancyTimer from './FancyTimer'
import PriceCard, { PremiumPriceCard } from './PriceCard'
import mq from '../../utils/media-query'
import isFlashSale from '../../utils/FeatureToggle'

const Section = styled.section`
  background-image: linear-gradient(var(--color_blur_dark), var(--color_blue));
  color: #fff;
  padding: 63px 0;
`
const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1100px) {
    flex-direction: column;
    max-width: 460px;
  }
`
const Title = styled.h2`
  font-size: 48px;
  font-weight: 100;
  font-style: italic;
  line-height: 1.2;
  strong {
    font-weight: 800;
  }
`
const Label = styled.p`
  color: var(--color_blue_light);
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
  margin-top: 60px;
  margin-bottom: 16px;
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 100px;

  padding: 0 var(--padding_size);
  ${mq.s} {
    margin-bottom: 16px;
  }
`

const BulkTicket = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 var(--padding_size);

  a {
    color: var(--color_blue_light);
    text-decoration: underline;
  }
`

function Price({ id }) {
  return (
    <Section id={id}>
      <Wrapper>
        <TitleWrapper>
          <Title>
            Join us at <strong>The UX Thailand Conference</strong>
          </Title>
          <Label>
            {isFlashSale()
              ? 'FLASH SALE - 75% OFF DAY 1, 44% OFF FULL EXPERIENCE. ENDS:'
              : 'Get 33% off. Early bird tickets ends January 1st 2019'}
          </Label>
          <FancyTimer
            until={
              isFlashSale()
                ? '2018-12-21T23:59:59+07:00'
                : '2019-01-01T23:59:59+07:00'
            }
          />
        </TitleWrapper>
        <CardWrapper>
          <a
            href="https://book.uxth.co/conf2019/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PriceCard
              head="Day 1"
              title="INSPIRE"
              subtitle="Become inspired by industry leaders from across the globe about UX and Product Management, includes networking, raffles and afterparty"
              originPrice="4,950"
              promoPrice={isFlashSale() ? '1,225' : '2,450'}
            />
          </a>
          <a
            href="https://book.uxth.co/conf2019/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PriceCard
              head="Day 2"
              title="HANDS-ON"
              subtitle="Leave UX Thailand a better designer by attending our workshops. This ticket does not include day 1"
              originPrice="11,950"
              promoPrice={isFlashSale() ? '8,450' : '8,950'}
            />
          </a>
          <a
            href="https://book.uxth.co/conf2019/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PremiumPriceCard
              head="Day 1 & 2"
              title="FULL EXPERIENCE"
              subtitle="Join us for the Full UX Thailand Experience with inspiring presentations and upskilling workshops plus networking and afterparty"
              originPrice="14,950"
              promoPrice={isFlashSale() ? '8,450' : '9,950'}
            />
          </a>
        </CardWrapper>
        <BulkTicket>
          <Label>
            For bulk tickets or questions, contact us on{' '}
            <a href="tel:+66872223380">087 222 3380</a> or{' '}
            <a href="mailto:uxthconf@gmail.com">uxthconf@gmail.com</a>.
          </Label>
        </BulkTicket>
      </Wrapper>
    </Section>
  )
}

export default Price
