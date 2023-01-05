import styled from "styled-components";

export const Spacer = styled.div`
height: 50px;
width: 5px;
background-color: white;
position: relative;
top: 35px;

@media screen and (max-width: 1450px) {
    transform: scale(0);
    position: absolute;
}
`