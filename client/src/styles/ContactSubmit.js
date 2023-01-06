import styled from "styled-components";

export const ContactSubmit = styled.div`
height: 30px;
width: 75px;
background-color: purple;
position: absolute;
right: 60px;
top: 0px;
display: flex;
justify-content: center;
align-items: center;
&:hover {
    cursor: pointer;
}

@media screen and (max-width: 560px) {
    width: 258px;
    position: relative;
    right: 0px;
}
`