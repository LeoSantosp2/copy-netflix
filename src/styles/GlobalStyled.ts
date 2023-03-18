import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html, body, #root{
        width: 100%;
        height: 100vh;
    }
`;
