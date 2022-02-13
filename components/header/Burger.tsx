import React, { useState } from 'react';
import styled from 'styled-components';

interface IBurger {
  open: boolean;
  setOpen(value: boolean): void;
}

interface IOpen {
  open: boolean;
}

const Burger = ({ open, setOpen }: IBurger) => {
  return (
    <S__Burger title="Mobile Navigation" onClick={() => setOpen(!open)}>
      <S__Bar open={open} />
      <S__Bar open={open} />
    </S__Burger>
  );
};

const S__Burger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 12px;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const S__Bar = styled.span<IOpen>`
  width: 30px;
  height: 2px;
  background: ${({ theme }) => theme.colors.primary.grey};
  transition: transform 0.3s ease;
  transform-origin: 8px;

  &:first-child {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }
  &:nth-child(2) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;

export default Burger;
