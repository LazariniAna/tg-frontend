import * as S from './style';
import logohair from '../../Images/logohair.png';
import { Person, ListRounded } from '@mui/icons-material';
import { useState } from 'react';
import Menu from '../Menu';

export default function Header(props) {

  const [open, setOpen] = useState(false);

  function handleMenu() {
    setOpen(!open);
  };

  return (
    <>
      <S.Header>
        <S.ContainerLogo position="flex-start" marginLeft>
          <ListRounded onClick={() => handleMenu()} />
        </S.ContainerLogo>
        <S.ContainerLogo position="center">
          <S.Logo src={logohair} />
          <b>Hair</b>Project
        </S.ContainerLogo>
        <S.ContainerLogo position="flex-end" marginRight>
          <Person />
        </S.ContainerLogo>
      </S.Header>
      {open ?
        <Menu /> : null}
    </>
  )
}