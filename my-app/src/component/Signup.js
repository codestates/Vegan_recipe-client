import { Component } from "react";
import imgg from "../img/avatar.png"
import imggg from "../img/inputimage1.png"
import axios from "axios";


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      verifiedpassword: "",
      username: "",
      errorMessage: ""
    };
    this.handleInputValue = this.handleInputValue.bind(this)
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  // handleSignup = () => {
  //   const { email, password, verifiedpassword, username } = this.state;
  //   if (!email || !password || !verifiedpassword || !username) {
  //     this.setState({
  //       errorMessage: "모든 항목은 필수입니다"
  //     });
  //     return;
  //   }
  //   axios.post(url, {
  //       email: email,
  //       password: password,
  //       verifiedpassword: verifiedpassword,
  //       username: username,
  //   })
  //   .then((res)=> {
  //     this.props.history.push("/") // 메인 페이지로 이동 
  //   })
  //   .catch((err) => console.log(err));
  // }

render(){
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
              <input type="text" placeholder="비밀번호를 입력해주세요" className="InputPassword" 
              onChange={this.handleInputValue("password")}/>
            </div>
          </div>
          <div className="SignupInputEmptyArea"/>

          <div className="SignupInputArea">
            <div className="SignupInputImage">
              <img className="SignupImage2" src={imggg} alt=''/>
            </div>
            <div className="SignupInputText">
              <input type="text" placeholder="비밀번호를 한번 더 입력해주세요" className="InputPassword2"
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
              onChange={this.handleInputValue("username")}/>
            </div>
          </div>
          <div className="SignupInputEmptyArea"/>

          <button className="SignupButton" type='submit' >Sign Up</button>

        </div>
      </div>
    )
  }
}

export default Signup