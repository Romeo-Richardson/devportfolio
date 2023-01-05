import styled from "styled-components";

export const ProjectButton = styled.div`
background-color: orange;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 40%;

&:hover {
    cursor: pointer;
}
@media screen and (max-width: 840px) {
    width: 100%;
    height: 50px;
}
`