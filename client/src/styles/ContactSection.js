import styled from "styled-components";

export const ContactSection = styled.button`
height: 500px;
width: 1450px;
position: relative;
top: ${(props) => props.top};
overflow: hidden;
display: flex;
flex-direction: column;
align-items: ${(props) => props.ai};
border: none;

@media screen and (max-width: 1450px) {
    width: 80vw;
}
@media screen and (max-width: 1270px) {
    width: 80vw;
    height:750px;
    align-items: center;
    justify-content: space-between;
}
@media screen and (max-width: 560px) {
    width: 312px;
    height: 710px;
}
`