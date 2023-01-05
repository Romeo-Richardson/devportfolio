import styled from "styled-components";

export const ProjectTextContainer = styled.div`
height: 150px;
width: 375px;
position: relative;
top: 40px;

@media screen and (max-width: 1450px) {
    position: relative;
    top: -50px;
}
@media screen and (max-width: 530px) {
    width: 300px;
    margin-bottom: 20px;
}
`