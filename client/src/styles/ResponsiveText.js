import styled from "styled-components";

export const ResponsiveText = styled.p`
color: white;
position: relative;
top: ${(props) => props.top};
@media screen and (max-width: 1270px) {
    text-align: center;
}
`