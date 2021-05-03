import { Component } from "react";
import imgg from "../img/avatar.png"
import imggg from "../img/inputimage1.png"

class Login extends Component {

  render() {
    return (
      <div className="LoginContainer">
        <div className="LoginUpRowEmptyArea"/>
        <div className="LoginArea">
          <div className="LoginEmailArea">
            <div className="LoginInputImage">
              <img className="LoginImage" src={imgg} alt=''/>
            </div>
            <div className="LoginInputText">
              <input type="text" placeholder="이메일 주소를 입력해주세요" className="InputEmail"/>
            </div>
          </div>
          <div className="LoginMidEmptyArea"/>
          <div className="LoginPasswordArea">
          <div className="LoginInputImage">
              <img className="LoginImage2" src={imggg} alt=''/>
            </div>
            <div className="LoginInputText">
              <input type="text" placeholder="비밀번호를 입력해주세요" className="InputPassword"/>
            </div>
          </div>
          <div className="LoginMidEmptyArea"/>
          <button className="LoginButton">Log in</button>
        </div>
        <div className="LoginUpRowEmptyArea"/>
      </div>
    );
  }
}

export default Login;