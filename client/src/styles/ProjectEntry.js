import styled from "styled-components";

export const ProjectEntry = styled.div`
height: 500px;
width: 1450px;
position: relative;
top: ${(props) => props.top};
overflow: hidden;
display: flex;
flex-direction: column;
align-items: ${(props) => props.ai};
margin-top: 10px;
margin-bottom: 10px;

@media screen and (max-width: 1450px) {
    width: 80vw;
}
@media screen and (max-width: 1285px) {
    height: 750px;
    align-items: center;
}
`