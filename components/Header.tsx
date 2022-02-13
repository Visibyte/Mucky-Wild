import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from 'components/header/Logo';
import Burger from 'components/header/Burger';
import MobileNav from './header/MobileNav';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <S__Container>
      <Logo />
      <Burger open={open} setOpen={setOpen} />
      <MobileNav open={open} />
    </S__Container>
  );
};

const S__Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 25px;
`;

export default Header;
