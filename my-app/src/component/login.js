import { Component } from "react";
import imgg from "../img/avatar.png"
import imggg from "../img/inputimage1.png"
import axios from "axios";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          errorMessage: ""
        };
    
        this.handleSignup = this.handleSignup.bind(this)
        this.handleInputValue = this.handleInputValue.bind(this)
      }
    
      handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
      };
    
      handleSignup = () => {
        console.log(this.state)
        const { email, password} = this.state;
        console.log(email)
        if (!email || !password) {
          this.setState({
            errorMessage: "모든 항목은 필수입니다"
          });
          return;
        }
        axios.post("http://18.116.115.62:4000/users/login", {
            email: email,
            password: password,
        })
        .then((res)=> {
          console.log(res)
          this.props.history.push("/") // 메인 페이지로 이동 
        })
        .catch((err) => console.log(err));
      }

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
              <input type="text" placeholder="이메일 주소를 입력해주세요" className="InputEmail"
              onChange={this.handleInputValue("email")}/>
            </div>
          </div>
          <div className="LoginMidEmptyArea"/>
          <div className="LoginPasswordArea">
          <div className="LoginInputImage">
              <img className="LoginImage2" src={imggg} alt=''/>
            </div>
            <div className="LoginInputText">
              <input type="text" placeholder="비밀번호를 입력해주세요" className="InputPassword"
              onChange={this.handleInputValue("password")}/>
            </div>
          </div>
          <div className="LoginMidEmptyArea"/>
          <button className="LoginButton"
          onClick={this.handleSignup}>Log in</button>
        </div>
        <div className="LoginUpRowEmptyArea"/>
      </div>
    );
  }
}

export default Login; 
