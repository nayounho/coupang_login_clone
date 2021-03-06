import Logo from '../components/LogoFooter/Logo';
import Button from '../components/Button/Button';
import Input from '../components/Input/SignInput';
import AutoSignCheckbox from '../components/AutoSignCheckbox/AutoSignCheckbox';
import '../components/LogoFooter/footer.scss';
import '../components/Form/Form.scss';

function App() {
  return (
    <>
      <Logo type="colorful"/>
    <form className="form">
      <Input name="Id" type="text" icon="inputEmail"/>
      <Input name="Pw" type="password" icon="inputLock" visible="inputOpenEyes"/>
      <AutoSignCheckbox checked="true">자동로그인</AutoSignCheckbox>
      <Button mode='primary' disabled>로그인</Button>
    </form>
    <form className="form_footer">
      <Button mode='secondary'>회원가입</Button>
      <span className="footer">ⓒCoupang Corp. All rights reserved.</span>
    </form>
    </>
  )
}

export default App;
