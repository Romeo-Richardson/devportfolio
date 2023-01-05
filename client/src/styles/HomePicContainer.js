import styled from "styled-components";

export const HomePicContainer = styled.div`
height: 650px;
width: 850px;
position: absolute;
right: 0px;
top: 25px;

@media screen and (max-width: 1450px) {
    width: 650px;
    height: 450px;
}

@media screen and (max-width: 1270px) {
    display: none;
    position: absolute;
}
`