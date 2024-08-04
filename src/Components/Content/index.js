import * as S from "./style"

export default function Content(props) {
    return (
      <S.ContentItems>
        {props.children}
      </S.ContentItems>
    )
  }
  