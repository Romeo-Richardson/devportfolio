import styled from "styled-components";

export const CustomLink = styled.a`
color: white;
text-decoration: none;
&:hover {
    color: ${(props) => props.color};
    cursor: pointer;
}
`