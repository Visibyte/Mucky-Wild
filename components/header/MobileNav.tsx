import React from 'react';
import styled from 'styled-components';
import Links from './Links';

interface IBurger {
  open: boolean;
}

const MobileNav = ({ open }: IBurger) => {
  return <S__MobileNav open={open}>test</S__MobileNav>;
};

const S__MobileNav = styled.nav<IBurger>`
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
`;
export default MobileNav;
