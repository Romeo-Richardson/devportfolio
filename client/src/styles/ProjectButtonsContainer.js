import styled from "styled-components";

export const ProjectButtonsContainer = styled.div`
height: 50px;
width: 375px;
position: relative;
top: 35px;
display: flex;
justify-content: space-between;

@media screen and (max-width: 1450px) {
    top: -15px;
}
@media screen and (max-width: 530px) {
    height: 150px;
    width: 300px;
    flex-direction: column;
}
`