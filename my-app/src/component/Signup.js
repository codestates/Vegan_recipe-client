import React from 'react'



export default function signUp(){
    return (
        <div>
            <input type="text" placeholder="이메일을 입력하세요"></input> <br/>
            <input type="text" placeholder="비밀번호를 입력하세요"></input> <br/>
            <input type="text" placeholder="비밀번호 확인"></input> <br/>
            <input type="text" placeholder="닉네임을 입력하세요"></input> <br/>
            <button> 회원 가입 </button>
        </div>
    )
}