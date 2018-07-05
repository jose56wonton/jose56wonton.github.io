import styled from 'styled-components';
import {colors,transitions} from './variables';


export const Underline =  styled.span`
  background-color: ${colors.dark};
  color: ${colors.dark};
  height:8px;
  width: 100%; 
  left: 10%;
  bottom: 0;
`
export const SectionTitle = styled.h2`   
  margin-bottom: 20px;
  display: inline-block;
  width: auto;
  position:relative;
  span{
    position: absolute;
    width: 60%;
    height: 5px;
    top:110%;
    z-index: -1;
    transform: translateY(-50%);
    left: 0%;;
    background-color: ${colors.light};
    transition: ${transitions.fast};
  }
  &:hover{
    span{
      width: 70%;
    } 
  }
`
