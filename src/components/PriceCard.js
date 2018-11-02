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
`
const CardSubtitle = styled.span`
  font-size: 1.25em;
  font-weight: 300;
  font-style: italic;
  color: #484848;
  blue {
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
  }
`
const BuyTicket = styled.div`
  color: var(--color_blue);
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
  background: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: ${paddingSize};
`

function PriceCard({
  head, title, subtitle, originPrice, promoPrice,
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
        <BuyTicket>Buy Ticket</BuyTicket>
      </CardFooter>
    </Card>
  )
}

export default PriceCard
