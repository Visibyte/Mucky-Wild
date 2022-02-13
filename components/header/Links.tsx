import styled from 'styled-components';
import Link from 'next/link';

const Links = () => {
  const linkData = [
    {
      name: 'Explore',
      to: '/Explore',
    },
    {
      name: 'About',
      to: '/About',
    },
    {
      name: 'Contact',
      to: '/Contact',
    },
  ];
  return (
    <div>
      <ul>
        {linkData.map((link, index) => (
          <S__Link key={index}>
            <Link href={link.to}>{link.name}</Link>
          </S__Link>
        ))}
      </ul>
    </div>
  );
};

const S__Link = styled.li`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.sizes.nav};
  letter-spacing: ${({ theme }) => theme.spacing.letterSpacing.nav};
  font-family: ${({ theme }) => theme.fontFamily.workSans};
  font-weight: bold;
`;

export default Links;
