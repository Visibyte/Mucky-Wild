import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary.grey}
    }
`;

export default Globals;
