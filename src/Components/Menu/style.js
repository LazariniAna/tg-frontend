import styled from 'styled-components';
import {colors} from '../../theme';

export const Menu = styled.div`
width: 100%;
height: 90px;
background-color: ${colors.darkTransparent};
display: flex;
justify-content: center;
align-items: center;
`;

export const List = styled.ul`
display: flex;
justify-content: center;
align-items: center;
`;

export const ItemList = styled.li`
display: flex;
justify-content: center;
align-items: center;
color: #fff;
font-size: 25px;

&&:hover{
  font-style: italic;
  cursor: pointer;
}
`;

