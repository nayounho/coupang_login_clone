import Logo from '../components/Logo/Logo';
import Button from '../components/Button/Button';

function App() {
  return (
    <>
      <Logo type="colorful"/>
      <Button mode='primary' disabled>로그인</Button>
      <Button mode='secondary'>회원가입</Button>
    </>
  )
}

export default App;
