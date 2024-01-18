import * as S from './style';

export default function Layout(props) {
  return (
    <div>
      <S.header/>
      <a href="/scheduling">
      Layout
      </a>
      {props.children}
    </div>
  )
}