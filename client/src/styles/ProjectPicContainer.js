import styled from "styled-components"

export const ProjectPicContainer = styled.div`
height: 450px;
width: 850px;
position: absolute;
right: 0px;
top: 25px;
background-color: yellow;

@media screen and (max-width: 1450px) {
    height: 350px;
    width: 650px;
}
@media screen and (max-width: 1285px) {
    position: relative;
    top: -55px;
}
@media screen and (max-width: 840px) {
    height: 250px;
    width: 450px;
}
@media screen and (max-width: 530px) {
    height: 150px;
    width: 300px;
}
`