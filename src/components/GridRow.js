import styled, { css } from 'react-emotion'
import mq from '../../utils/media-query'

const dynamicStyle = ({
  column = 3,
  columnGap = 20,
  rowGap = 10,
  height = 150,
  breakToRow = mq.l,
  breakToRowHeight = 155,
  maxWidth = '100%',
}) => css`
  grid-template-columns: repeat(${column}, 1fr);
  grid-column-gap: ${columnGap}px;
  grid-row-gap: ${rowGap}px;
  grid-auto-rows: ${height}px;
  max-width: ${maxWidth};
  margin: 0 auto;

  ${breakToRow} {
    grid-template-columns: 1fr;
    grid-auto-rows: ${breakToRowHeight}px;
  }
`
const GridRow = styled.div`
  display: grid;
  ${dynamicStyle};
`

export { GridRow }
