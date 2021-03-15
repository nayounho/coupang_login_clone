import Logo from '../components/LogoFooter/Logo';
import Button from '../components/Button/Button';
import Input from '../components/Input/SignInput';
import AutoSignCheckbox from '../components/AutoSignCheckbox/AutoSignCheckbox';
import '../components/LogoFooter/footer.scss';

function App() {
  return (
    <>
      <Logo type="colorful"/>
      <Input name="Id" type="text" icon="inputEmail"/>
      <Input name="Pw" type="password" icon="inputLock" visible="inputOpenEyes"/>
      <AutoSignCheckbox checked="true">자동로그인</AutoSignCheckbox>
      <Button mode='primary' disabled>로그인</Button>
      <Button mode='secondary'>회원가입</Button>
      <span className="footer">ⓒCoupang Corp. All rights reserved.</span>
    </>
  )
}

export default App;
