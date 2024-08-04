import * as S from './style';

export default function Menu(props) {

  return (
    <S.Menu>
      <S.List>
        <S.ItemList>
          <S.LinkPage href='/'>
            O Colégio
          </S.LinkPage>
        </S.ItemList>
        {/* <S.VerticalBar>
          |
        </S.VerticalBar> */}
        <S.ItemList>
          <S.LinkPage href='/scheduling'>
            Agendamentos
          </S.LinkPage>
        </S.ItemList>
        {/* <S.VerticalBar>
          |
        </S.VerticalBar> */}
        <S.ItemList>
          <S.LinkPage href='/services'>
            Serviços
          </S.LinkPage>
        </S.ItemList>
        {/* <S.VerticalBar>
          |
        </S.VerticalBar> */}
        <S.ItemList>
          <S.LinkPage href='/contact'>
            Contato
          </S.LinkPage>
        </S.ItemList>
      </S.List>
    </S.Menu>
  )
}