import React, { useState } from "react";
import styles from "../LogIn/LogIn.scss";


const LogIn = () => {

const [email, setEmail] = useState();
const [password, setPasword] = useState();


const emailHandler = (e) => {
  setEmail(e.target.value);
};
const passwordHandler = (e) => {
  setPasword(e.target.value);
}

const login = (e) => {
  e.preventDefault();
const url = 'https://reqres.in/api/login'

const user = {
  email: email,
  password: password
}
  fetch(url, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})
.then(res => {
  return res.json();
}).then(response => {
  console.log(response);
  localStorage.setItem('token', response.token);
})


}

  return (
    <div className="Login">

      <form>
      <div class="form-floating">
      <input onChange={(e)=> emailHandler(e)} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input onChange={(e) => passwordHandler(e)} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>
    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me!
      </label>
    </div>
    <button onClick={(e) => login(e)} class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    </div>
  );
};

export default LogIn;
