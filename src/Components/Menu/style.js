import styled from 'styled-components';
import { colors } from '../../theme';

export const Menu = styled.div`
width: 100%;
height: 60px;
background-color: ${colors.darkTransparent};
display: flex;
justify-content: center;
align-items: center;
`;

export const List = styled.ul`
display: flex;
justify-content: center;
align-items: center;
padding: 0;
`;

export const ItemList = styled.li`
display: flex;
justify-content: center;
align-items: center;
color: #fff;
font-size: 20px;
margin: 0 15px;
width: 200px;

&&:hover{
  font-style: italic;
  cursor: pointer;
}
`;

export const VerticalBar = styled.div`
  color: ${colors.primaryLight};
  font-size: 30px;
  /* display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center; */
  margin-bottom: 5px;
`; 

export const LinkPage = styled.a`
text-decoration:none;
color:#fff;


&&:visited{
  color: ${colors.light || '#fff'};
}
`; 