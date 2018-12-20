import React from 'react'
import styled, { css } from 'react-emotion'

const PrimaryStyle = css`
  font-weight: 700;
  background: var(--color_blue);
  color: #fff;
  text-shadow: 0 1px 2px rgba(15, 29, 79, 0.4);
  text-transform: uppercase;

  &:hover {
    color: #fff;
    background: var(--color_blue_hover);
    border-color: var(--color_blue_hover);
  }
  &:active {
    color: #fff;
    background: var(--color_blue_active);
    border-color: var(--color_blue_active);
  }
`
const OutlineStyle = css`
  background: transparent;
  color: var(--color_blue);
  font-weight: 400;
  font-style: normal;

  &:hover {
    background: var(--color_blue);
    border-color: var(--color_blue);
    color: #fff;
  }
  &:active {
    background: var(--color_blue_active);
    border-color: var(--color_blue_active);
  }
`
const FlashSaleStyle = css`
  background: var(--color_orange);
  border-color: var(--color_orange);

  &:hover {
    background: var(--color_orange_dark);
    border-color: var(--color_orange_dark);
  }
`

const ButtonStyle = ({ outline, stretchOn = '0px', isFlashSales }) => css`
  font-size: 16px;
  min-height: 44px;
  cursor: pointer;
  min-width: 100px;
  border-radius: 24px;
  padding: 8px 32px;
  border: 1px solid var(--color_blue);
  transition: all 0.3s ease;
  &:focus {
    outline: 0;
  }
  &:active {
    transform: scale(0.96);
  }
  @media (max-width: ${stretchOn}) {
    width: 100%;
  }

  ${outline ? OutlineStyle : PrimaryStyle};

  ${isFlashSales && FlashSaleStyle};
`

const Button = styled.button`
  ${ButtonStyle};
`

const StyledAnchor = styled.a`
  ${ButtonStyle};
`

function AnchorButton({ children, ...props }) {
  return (
    <StyledAnchor role="button" {...props}>
      {children}
    </StyledAnchor>
  )
}
AnchorButton.defaultProps = {
  isFlashSales: false,
}

export default Button
export { AnchorButton }
