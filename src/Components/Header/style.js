import styled from 'styled-components';
import {colors} from '../../theme';

export const Header = styled.div`
width: 100%;
height: 70px;
background-color: ${colors.primary};
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Logo = styled.img`
min-width: 70px;
margin-right: 10px;
`;

export const ContainerLogo = styled.div`
display: flex;
color: #FFF;
align-items: center;
font-size: 25px;
margin-left: ${(props) => (props.marginLeft ? '15px' : '0')};
margin-right: ${(props) => (props.marginRight? '15px' : '0')};
justify-content: ${(props) => (`${props.position}`)};
font-style: italic;
width: 30%;
svg{
  color: #FFF890;
}

svg{
  font-size: 40px;
  cursor: pointer;
}
`;


