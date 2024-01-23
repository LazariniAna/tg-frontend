import Header from '../Header';
import * as S from './style';

export default function Layout(props) {
  
  return (
    <div>
      <Header/>
      {props.children}
    </div>
  )
}