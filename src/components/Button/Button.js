import { Component } from 'react';
import '../Button/Button.scss';

class Button extends Component {
  render(){
    // console.log(this.props.mode)
    return (
      <button className={`button ${this.props.mode}`} disabled={this.props.disabled}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;