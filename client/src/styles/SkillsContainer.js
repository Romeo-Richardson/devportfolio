import styled from 'styled-components'

export const SkillsContainer = styled.div`
height: 425px;
width: 825px;
position: absolute;
justify-self: center;
left: 0px;
top: 65px;

@media screen and (max-width: 1450px) {
    height: 375px;
    width: 625px;
}
@media screen and (max-width: 1270px) {
    position: relative;
    top: 0px;
    right: 0px;
}
@media screen and (max-width: 785px) {
    width: 425px;
    height: 325px;
    top: 0px;
    right: 0px;
    position: relative;
}
@media screen and (max-width: 560px) {
    height: 225px;
    width: 300px;
}
`