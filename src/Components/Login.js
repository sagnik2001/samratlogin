import React from "react"
import {GoogleOutlined,FacebookOutlined} from "@ant-design/icons"
import fire from "../FirebaseStorage/Firebase.js"
import {GoogleProv} from "../FirebaseStorage/AuthMethods.js"
import socialmediaAuth from "../FirebaseStorage/Authentication.js"

import "./Login.css"
const Login =(props)=>{
   const handleOnClick=async(provider)=>{
     const res= await socialmediaAuth(provider)
     console.log(res);
   }
  return(
  <div id="login-page">
      <div id="login-card">
          <h1>Welcome to WeChat Messenger !!!</h1>
          <p>A Chat Application which connects you with your Close Ones....🤝🤝🤝</p>
          <div >
          <label className="label">UserName</label>
          <input className="input"
            type="text"
          />
          <label className="label">Password</label>
          <input className="input"
             type="password"
          />
               <div className="btnContainer">
               <button className="button">Log In</button>
               <p>
                  Dont Have an Account? <span>Sign Up</span>
               </p>
               </div>
          </div>
          <br></br>
          <button className="login-button google" onClick={()=>handleOnClick(GoogleProv)}>
              <GoogleOutlined/> Sign In with Google

          </button>

      </div>
      </div>
)
}
export default Login
