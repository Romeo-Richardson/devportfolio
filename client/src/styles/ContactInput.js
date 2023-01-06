import styled from "styled-components";

export const ContactInput = styled.input`
height: 24px;
width: 450px;
left: 60px;
position: relative;

@media screen and (max-width: 1450px) {
    width: 250px;
}
@media screen and (max-width: 560px) {
    width: 250px;
    position: relative;
    left: 0px;
    z-index: 1;
}
`