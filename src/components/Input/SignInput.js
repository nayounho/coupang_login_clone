import { Component } from "react";
import { ReactComponent as InputEmail } from './inputImages/inputEmail.svg';
import { ReactComponent as InputLock } from './inputImages/inputLock.svg';
import { ReactComponent as VisibleFalse } from './inputImages/inputCloseEyes.svg';
import { ReactComponent as VisibleTrue } from './inputImages/inputOpenEyes.svg';
import './SignInput.scss';

class Input extends Component {
  render() {
    return (
      <div className="inputs">
        {this.props.icon === 'inputEmail' ? <InputEmail /> : <InputLock />}
        <input className={`input input_${this.props.name}`} type= {`${this.props.type}`} 
          placeholder={this.props.type === 'text' ? '아이디(이메일)' : '비밀번호'}/>
          {this.props.type === 'password' ? this.props.visible === 'inputOpenEyes' 
          ? <button className="Visible"><VisibleTrue /></button> 
          : <button className="Visible"><VisibleFalse /></button> : null}
      </div>
    )  
  }
}

export default Input;