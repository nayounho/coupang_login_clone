import {ReactComponent as Colorful} from '../../essets/logo/colorful.svg';
import {ReactComponent as Mono} from '../../essets/logo/mono.svg';
import {ReactComponent as Black} from '../../essets/logo/black.svg';


const Logo = (props) => {
  return (props.type === "colorful" ? <Colorful /> : props.type === "mono" ? <Mono /> : <Black />)
}

export default Logo;
