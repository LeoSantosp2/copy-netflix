import styled from 'styled-components';

import * as colors from '../../config/colors';

import netflixBackground from '../../images/netflix-background.png';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: ${colors.white} url(${netflixBackground}) center center no-repeat fixed;
    background-size: cover;
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;

    img {
        width: 150px;
    }

    .functions {
        padding-top: 30px;
        padding-right: 20px;
        display: flex;
        align-items: center;
    }

    .functions .options-linguage {
        width: 130px;
        height: 30px;
        margin-right: 20px;
        border-radius: 5px;
        border: 1px solid ${colors.white};
        display: flex;
        justify-content: center;
        align-items: center;

        :hover {
            border: 2px solid ${colors.white};
        }
    }

    .functions .options-linguage svg {
        margin-left: 7px;
        color: ${colors.white};
    }

    #options-linguages {
        width: 110px;
        height: 30px;
        font-size: 1em;
        border: 0px;
        outline: none;
        background-color: transparent;
        color: ${colors.white};
    }

    button {
        width: 70px;
        height: 30px;
        border: 0px;
        border-radius: 5px;
        transition: 0.3s;
        outline: none;
        cursor: pointer;
        background-color: ${colors.netflixRed};
        color: ${colors.white};

        :hover {
            background-color: ${colors.netflixDarkRed};
        }
    }
`;

export const Main = styled.main`
    width: 100%;
    height: 80vh;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.white};

    h1 {
        font-size: 3em;
        font-weight: bold;
    }

    p {
        font-size: 1.5em;
        margin: 15px 0px;
    }

    .form input {
        width: 500px;
        height: 50px;
        margin-right: 15px;
        padding: 15px;
        font-size: 1.1em;
        border-radius: 5px;
        border: 1px solid ${colors.white};
        outline: none;
        background-color: ${colors.shadow};
        color: ${colors.white};

        :focus {
            border: 2px solid ${colors.white};
        }
    }

    .form button {
        width: 130px;
        height: 50px;
        padding: 10px;
        border: 0px;
        border-radius: 5px;
        font-size: 1.1em;
        transition: 0.3s;
        cursor: pointer;
        outline: none;
        background-color: ${colors.netflixRed};
        color: ${colors.white};

        :hover {
            background-color: ${colors.netflixDarkRed};
        }
    }
`;
