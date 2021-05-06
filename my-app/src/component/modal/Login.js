import { Component } from "react";
import imgg from "../img/avatar.png"
import imggg from "../img/inputimage1.png"

class Login extends Component {

  render() {
    return (
      <div className='SignupPage'>
        <div className='SignupLeftArea'/>
        <div className='SignupRightArea'>
          <div className="SignupTopArea"/>

          <div className="SignupInputArea">
            <div className="SignupInputImage">
              <img className="SignupImage" src={imgg} alt=''/>
            </div>
            <div className="SignupInputText">
              <input type="text" placeholder="이메일 주소를 입력해주세요" className="InputEmail"
              onChange={this.handleInputValue("email")}/>
            </div>
          </div>
          <div className="SignupInputEmptyArea"/>

          <div className="SignupInputArea">
            <div className="SignupInputImage">
              <img className="SignupImage2" src={imggg} alt=''/>
            </div>
            <div className="SignupInputText">
              <input type="password" placeholder="비밀번호를 입력해주세요" className="InputPassword" 
              onChange={this.handleInputValue("password")}/>
            </div>
          </div>
          <div className="SignupInputEmptyArea"/>

          <div className="SignupInputArea">
            <div className="SignupInputImage">
              <img className="SignupImage2" src={imggg} alt=''/>
            </div>
            <div className="SignupInputText">
              <input type="password" placeholder="비밀번호를 한번 더 입력해주세요" className="InputPassword2"
              onChange={this.handleInputValue("verifiedpassword")}/>
            </div>
          </div>
          <div className="SignupInputEmptyArea"/>

          <div className="SignupInputArea">
            <div className="SignupInputImage">
              <img className="SignupImage" src={imgg} alt=''/>
            </div>
            <div className="SignupInputText">
              <input type="text" placeholder="사용하실 이름을 입력해주세요" className="InputUsername"
              onChange={this.handleInputValue("name")}/>
            </div>
          </div>
          <div className="SignupInputEmptyArea"/>

          <button className="SignupButton" type='submit' onClick={this.handleSignup}>Sign Up</button>

        </div>
      </div>
    );
  }
}

export default Login;