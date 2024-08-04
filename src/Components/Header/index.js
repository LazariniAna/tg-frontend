import * as S from './style';
import logohair from '../../Images/logo.svg';
import { Person, Menu } from '@mui/icons-material';
import { useState } from 'react';
import MenuContent from '../Menu';

export default function Header(props) {

  const [open, setOpen] = useState(false);

  function handleMenu() {
    setOpen(!open);
  };

  return (
    <>
      <S.Header>
        <S.ContainerLogo position="flex-start" marginLeft>
          <Menu onClick={() => handleMenu()} />
        </S.ContainerLogo>
        <S.ContainerLogo position="center">
          <S.Logo src={logohair} />
          <b>Colégio</b>Sol
        </S.ContainerLogo>
        <S.ContainerLogo position="flex-end" marginRight>
          <Person />
        </S.ContainerLogo>
      </S.Header>
      {open ?
        <MenuContent /> : null}
    </>
  )
}