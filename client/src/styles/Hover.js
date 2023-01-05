import styled from "styled-components";

export const Hover = styled.span`
color: white;
font-size: 18px;
&:hover {
    cursor: pointer;
    color: purple;
}
@media screen and (max-width: 1450px) {
    font-size: 14px;
}
`