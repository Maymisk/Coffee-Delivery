import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
    }

    
    button {
        cursor: pointer;
        border: 0;
    }

    body, input, textarea, button {
        font-family: 'Baloo 2', cursive;
        font-weight: 400;
        font-size: 1rem;
    }

    body {
        background: ${props => props.theme.background};
    }

    @media (min-width: 1440px) {
        html {
            font-size: 93.75%;
        }    

        body {
            padding: 0 10rem;
        }
    }

    @media (max-width: 768px) {
       
        html {
            font-size: 87.5%;
        }
        
        body {
                padding: 0 1rem;
            }
    }

`;
