import { Component } from "react";
import { ReactComponent as CheckedTrue } from './../AutoSignCheckbox/AutoSignCheckboxImage/checkedTrue.svg';
import { ReactComponent as CheckedFalse } from './../AutoSignCheckbox/AutoSignCheckboxImage/checkedFalse.svg';
import { ReactComponent as IdPwSymbol } from '../../essets/IdPwSymbol/symbol.svg';
import '../AutoSignCheckbox/AutoSignCheckbox.scss';

class AutoSignCheckbox extends Component {
  render(){
    return (
      <div className="AutoSignForm">
        <div className="checkbox">
          {this.props.checked === 'true' ? <CheckedTrue /> : <CheckedFalse />}
          <span className="autoLogin">{this.props.children}</span>
        </div>
        <div className="searchIdPw">
          <a href="https://www.google.com">아이디(이메일)/비밀번호 찾기</a>
          <IdPwSymbol />
        </div>
      </div>
    )
  }
}

export default AutoSignCheckbox;