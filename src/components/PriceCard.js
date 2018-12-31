import React from 'react'
import styled from 'react-emotion'
import mq from '../../utils/media-query'

const cardSize = '20em'
const paddingSize = '1.875em'
const CardHead = styled.span`
  font-size: 1.25em:
  font-weight: 600;
  font-style: italic;
  color: var(--color_blue);
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25);
`
const CardTitle = styled.h4`
  font-size: 2.25em;
  font-weight: 200;
  font-style: italic;
  color: var(--color_blue);
  text-shadow: 0 4px 4px rgba(15, 29, 79, 0.25);
  line-height: 1.25;
  margin-bottom: 8px;
`
const CardSubtitle = styled.span`
  font-size: 1.25em;
  font-weight: 300;
  font-style: italic;
  color: #484848;
  span {
    color: var(--color_blue);
  }
`
const CardPriceDiscount = styled.p`
  text-align: center;
  text-decoration: line-through;
  color: #ea0e50;
  font-size: 2em;
  font-weight: 300;
  font-style: italic;
`
const CardPrice = styled.p`
  font-size: 4em;
  font-weight: 800;
  font-style: italic;
  color: #1c3180;
  line-height: 1;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  small {
    font-size: 20px;
    font-weight: 300;
    margin-left: -8px;
  }
`
const BuyTicket = styled.p`
  cursor: pointer;
  color: var(--color_blue);
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  display: block;
  text-align: center;
`
const SoldOut = styled.p`
  color: var(--color_red);
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  display: block;
  text-align: center;
`
const CardFooter = styled.div`
  background: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 24px;
  border: 0;
  border-top-width: 1px;
  border-style: dashed;
  border-color: #ddd;
`
const Card = styled.div`
  height: 100%;
  margin: 0 var(--padding_size);
  margin-bottom: var(--padding_size);
  min-width: ${cardSize};
  display: flex;
  flex-direction: column;

  // based font size
  font-size: 16px;

  ${mq.s} {
    font-size: 10px;
  }

  @media (max-width: 1100px) {
    ${props => props.specialTopPadding
      && `
      padding-top: ${props.specialTopPadding}px;
      `};
  }

  transition: all ease 0.3s;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 26px 50px -20px rgba(0, 0, 0, 0.15);
  }
`
const CardBody = styled.div`
  background: #fff;
  height: 100%;
  padding: ${paddingSize};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const CardHeader = styled.div`
  position: relative;
  background: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: ${paddingSize};
`

function PriceCard({
  head, title, subtitle, originPrice, promoPrice, soldOut,
}) {
  return (
    <Card>
      <CardHeader>
        <CardHead>{head}</CardHead>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardHeader>
      <CardBody>
        <CardPriceDiscount>{originPrice}</CardPriceDiscount>
        <CardPrice>
          {promoPrice} <small>THB</small>
        </CardPrice>
      </CardBody>
      <CardFooter>
        {soldOut ? <SoldOut>SOLD OUT</SoldOut> : <BuyTicket>Buy Ticket</BuyTicket>}
      </CardFooter>
    </Card>
  )
}

const HatImage = styled.img`
  position: absolute;
  top: -80px;
  left: calc(50% - 75px);
`
function PremiumPriceCard({
  head, title, subtitle, originPrice, promoPrice, soldOut,
}) {
  return (
    <Card specialTopPadding={64}>
      <CardHeader>
        <HatImage src="/images/hat.svg" alt="" />
        <CardHead>{head}</CardHead>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardHeader>
      <CardBody>
        {originPrice != null && <CardPriceDiscount>{originPrice}</CardPriceDiscount>}
        <CardPrice>
          {promoPrice} <small>THB</small>
        </CardPrice>
      </CardBody>
      <CardFooter>
        {soldOut ? <SoldOut>SOLD OUT</SoldOut> : <BuyTicket>Buy Ticket</BuyTicket>}
      </CardFooter>
    </Card>
  )
}

export default PriceCard
export { PremiumPriceCard }
