import React from 'react'
import { Component } from 'react'
import axios from "axios";


class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userEmail: "",
            password:""
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.loginRequestHandler = this.loginRequestHandler.bind(this);
    }

    inputHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    loginRequestHandler() {

        const url = '서버주소'
        axios.post(url,this.state)
        .then(res =>{
        const result = {
        isLogin : true
        }
        this.props.loginHandler(result)
    })
    }   
    

    render(){
        return (
            <div>
                <div>
                <div>이메일</div>
            <input          
            name='userEmail'
            type="text" 
            onChange={(e) => this.inputHandler(e)} 
            value={this.state.userEmail} 
            />
                </div>
                <div>
                <div>비밀번호</div>
            <input 
            name='password'
            type="password" 
            onChange={(e) => this.inputHandler(e)}
            value={this.state.password}
            /></div> <br/>
            <button onClick={this.loginRequestHandler} > 로그인 </button>
            </div>
        )
    }

}



export default Login;