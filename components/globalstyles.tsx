import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        line-height: 1.5;
        font-size: 1rem;
        font-family: Droid Sans, Fira Sans, Droid Sans, sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.foreground};
    }
    
    * {
        box-sizing: border-box;
    }
    
    a {
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: none;
    }
    
    code {
        color: crimson;
        background-color: #ccc;
        font-size: .85rem;
        font-family: Courier New, monospace;
        border-radius: 2.5px;
        padding: 2.5px;
        font-weight: 500;
    }
    
    pre {
        border-radius: 5px;
        width: 100%;
        overflow: auto;
        text-align: left;
        max-height:35em;
        padding: 5px;
        background-color: #ccc;
        @media (max-width: 460px) {
            max-width: 90vw;
        }
        ::before {
            counter-reset: linenum;
        }
    }
    
    pre:code {
        color: crimson;
        white-space:pre-wrap;
        font-size: 1rem;
        font-family: Courier New, monospace;
    }
`

export default GlobalStyle
