import { Component } from "react";
import imgg from "../img/avatar.png"
import imggg from "../img/inputimage1.png"

class Signup extends Component {
  render() {

    return(
      <div className='SignupPage'>
        <div className='SignupLeftArea'/>
        <div className='SignupRightArea'>
          <div className="SignupTopArea"/>

          <div className="SignupInputArea">
            <div className="SignupInputImage">
              <img className="SignupImage" src={imgg} alt=''/>
            </div>
            <div className="SignupInputText">
              <input type="text" placeholder="이메일 주소를 입력해주세요" className="InputEmail"/>
            </div>
          </div>
          <div className="SignupInputEmptyArea"/>

          <div className="SignupInputArea">
            <div className="SignupInputImage">
              <img className="SignupImage2" src={imggg} alt=''/>
            </div>
            <div className="SignupInputText">
              <input type="text" placeholder="비밀번호를 입력해주세요" className="InputPassword"/>
            </div>
          </div>
          <div className="SignupInputEmptyArea"/>

          <div className="SignupInputArea">
            <div className="SignupInputImage">
              <img className="SignupImage2" src={imggg} alt=''/>
            </div>
            <div className="SignupInputText">
              <input type="text" placeholder="비밀번호를 한번 더 입력해주세요" className="InputPassword2"/>
            </div>
          </div>
          <div className="SignupInputEmptyArea"/>

          <div className="SignupInputArea">
            <div className="SignupInputImage">
              <img className="SignupImage" src={imgg} alt=''/>
            </div>
            <div className="SignupInputText">
              <input type="text" placeholder="사용하실 이름을 입력해주세요" className="InputUsername"/>
            </div>
          </div>
          <div className="SignupInputEmptyArea"/>

          <button className="SignupButton">Sign Up</button>

        </div>
      </div>
    )
  }
}

export default Signup