import styled from "styled-components";

export const Navbar = styled.div`
height: 50px;
width: 1450px;
display: flex;
justify-content: space-between;

@media screen and (max-width: 1450px) {
    width: 80vw;
}
@media screen and (max-width: 560px) {
    width: 80vw;
    width: 312px;
}
`