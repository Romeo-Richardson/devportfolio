import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    background-color: hsl(229, 67%, 10%);
    font-family: 'Josefin Sans', sans-serif;
    font-family: 'Roboto', sans-serif;
}
`