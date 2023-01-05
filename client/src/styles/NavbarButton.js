import styled from "styled-components";

export const NavbarButton = styled.div`
height: 100%;
width: 75px;
color: white;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
&:hover {
    cursor: pointer;
    background-color: hsl(228, 68%, 6%);
    transition: 1s;
}
`