import styled from "styled-components";

export const ContactInputContainer = styled.div`
position: absolute;
right: 15px;
top: 65px;
height: 500px;
width: 675px;
display: flex;
flex-direction: column;
justify-content: space-between;

@media screen and (max-width: 1450px) {
    width: 475px;
    height: 400px;
}
@media screen and (max-width: 1270px) {
    position: relative;
    top: -50px;
}
@media screen and (max-width: 560px) {
    top: -12px;
    right: 0px;
    position: relative;
    align-items: center;
    height: 415px;
}
`