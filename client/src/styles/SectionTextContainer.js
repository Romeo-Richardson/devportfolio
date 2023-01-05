import styled from "styled-components";

export const SectionTextContainer = styled.div`
height: 150px;
width: 375px;
position: relative;
top: 50px;

@media screen and (max-width: 1270px) {
    top: -50px
}
@media screen and (max-width: 560px) {
    height: 200px;
    width: 275px;
    position: relative;
    top: -35px;
}
`