import Link from 'next/link';
import styled from 'styled-components';

const Logo = () => {
  return (
    <Link href="/">
      <S__Logo title="Mucky & Wild Logo">MUCKY & WILD</S__Logo>
    </Link>
  );
};

const S__Logo = styled.span`
  font-size: 36px;
  font-family: ${({ theme }) => theme.fontFamily.workSans};
  cursor: pointer;
`;

export default Logo;
