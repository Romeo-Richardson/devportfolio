import styled from "styled-components";

export const ContactField = styled.textarea`
width: 550px;
height: 375px;
position: relative;
bottom: 50px;
align-self: center;

@media screen and (max-width: 1450px) {
    width: 350px;
    height: 300px;
}
@media screen and (max-width: 560px) {
    width: 252px;
    bottom: 0px;
}
`