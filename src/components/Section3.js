import React from 'react'
import styled from 'react-emotion'

const Section = styled.section`
  display: flex;
`
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`
// const GridWrapper = styled.div`
//   display: grid;
//   grid-template-areas:
//     'long long long long'
//     '1 2 3 4';
// `
// const LongImg = styled.img`
//   grid-area: long;
//   width: 100%;
//   max-height: 620px;
//   object-fit: cover;
// `
// const ShortImg = styled.img`
//   grid-area: '${props => props.area}';
//   width: 100%;
//   max-height: 100%;
//   object-fit: cover;
// `
//
// function Section3({ id }) {
//   return (
//     <Section id={id}>
//       <GridWrapper>
//         <LongImg src="/images/carousal-img_01@2x.png" />
//         <ShortImg area="1" src="/images/carousal-img_02.png" />
//         <ShortImg area="2" src="/images/carousal-img_03.png" />
//         <ShortImg area="3" src="/images/carousal-img_04.png" />
//         <ShortImg area="4" src="/images/carousal-img_05.png" />
//       </GridWrapper>
//     </Section>
//   )
// }

function Section3({ id }) {
  return (
    <Section id={id}>
      <Image src="/images/mix.png" alt="" />
    </Section>
  )
}

export default Section3
