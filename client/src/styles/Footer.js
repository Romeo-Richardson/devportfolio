import styled from "styled-components";

export const Footer = styled.div`
height: 125px;
width: 1450px;
position: relative;
top: 225px;
border-top: 1px solid grey;
border-bottom: 1px solid grey;
display: flex;
align-items: center;
justify-content: space-around;

@media screen and (max-width: 1450px) {
    width: 80vw;
}
@media screen and (max-width: 560px) {
    width: 80vw;
    width: 312px;
}
`