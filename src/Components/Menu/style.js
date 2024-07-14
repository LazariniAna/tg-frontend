import styled from 'styled-components';
import { colors } from '../../theme';

export const Menu = styled.div`
width: 100%;
min-height: 60px;
background-color: ${colors.dark};
display: flex;
justify-content: center;
align-items: center;

position: fixed;
`;

export const List = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 0;
/* flex-wrap:wrap; */
`;

export const ItemList = styled.div`
width: 200px;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
font-size: 20px;
margin: 0 15px;

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
color:${colors.primary};
font-weight: 500;

&&:visited{
  color: ${colors.primary};
}
`; 