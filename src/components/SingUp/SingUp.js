import React, { useState } from "react";
import styles from "../SingUp/SingUp.scss";


const SingUp = () => {
const [email, setEmail] = useState();
const [pasword, setPasword] = useState();
const [firstName, setFirstName] = useState();
const [lastName, setLastName] = useState();

const emailHandler = (e) => {
  setEmail(e.target.value);
};
const paswordHandler = (e) => {
  setPasword(e.target.value);
};
const firstNameHandler = (e) => {
  setFirstName(e.target.value);
};
const lastNameHandler = (e) => {
  setLastName(e.target.value);
};
const url = 'www.google.com'
const authentication = (e) => {
  e.preventDefault();

  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    pasword: pasword
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
}).then(newRes => {
  console.log(newRes)
})
}


  return (
    <div className="Login">

      <form>
      <div class="form-floating">
      <input onChange={(e) => emailHandler(e)} value={email} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input onChange={(e) => paswordHandler(e)} value={pasword} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">User Name</label>
    </div>
    <div class="form-floating">
      <input onChange={(e) => firstNameHandler(e)} value={firstName} type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">First Name</label>
    </div>
    <div class="form-floating">
      <input onChange={(e) => lastNameHandler(e)} value={lastName} type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Last Name</label>
    </div>
    {/* <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me!
      </label>
    </div> */}
    <button onClick={() => authentication()} class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
        </form>
    </div>
  );
};

export default SingUp;
