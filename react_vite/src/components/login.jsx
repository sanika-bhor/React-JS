import { useState } from "react";
const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const onHandleLogin=()=>{
        if(email=="bhorsanika0239@gmail.com" && password=="sanika")
        {
            alert("login successfully");
        }
        else
        {
            alert("invalide user");
        }
    }


    const onEmailChange=()=>{
        setEmail(event.target.value);
    }


    const onPasswordChange=()=>{
        setPassword(event.target.value);
    }
  return (
    <>
      <div>
        <table>
          <tr>
            <td>Email:</td>
            <td><input type="email" name="email" value={email} onChange={onEmailChange}/></td>
          </tr>
          <tr>
            <td>Password:</td>
            <td><input type="password" name="email" value={password} onChange={onPasswordChange}/></td>
          </tr>
          <tr>
            <td></td>
            <td><button onClick={onHandleLogin}>LOGIN</button></td>
          </tr>
        </table>
      </div>
    </>
  );
};
export default Login;
