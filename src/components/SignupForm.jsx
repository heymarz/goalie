import {useEffect, useState, useContext} from 'react'
import DataContext from '../DataContext';
import { useNavigate } from 'react-router-dom';
import {headers} from "../Global";
import Errors from './Errors';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';

function SignupForm(){
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const {loginUser, addErrors, clearErrors, errors} = useContext(DataContext);
  const navigate = useNavigate();

  function handleSignup(e){
    e.preventDefault();

      fetch("/signup", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          user: {
            username: username,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
        }}),
      })
      .then((r)=>r.json())
      .then(data=>{
        if(data.id){
          loginUser(data);
          //navigate to onboardin questions page
          navigate("/onboarding")
        }else{
          addErrors([data.error])
        }
      })
  }

  useEffect(()=>{
    return()=>clearErrors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className='text-container'>
      <h2 className='header'>Sign up Form</h2>
      <Form onSubmit = {handleSignup}>
        <Form.Group className="ms-5" controlId="formGroupUsername">
          <Form.Label >Username: </Form.Label>
          <Form.Control 
            type = "text"
            autoComplete='off'
            placeholder = "Enter username"
            value = {username}
            onChange = {(e)=>setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="ms-5" controlId="formGroupEmail">
          <Form.Label>Email: </Form.Label>
          <Form.Control 
            type = "email"
            autoComplete='off'
            placeholder = "Enter Email"
            value = {email}
            onChange = {(e)=>setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="ms-5" controlId="formPassword">
        <Form.Label>Password: </Form.Label>
        <Form.Control
          type = "password"
          value = {password}
          placeholder= "Enter Password"
          onChange = {(e)=> setPassword(e.target.value)}
          autoComplete = "current-password"
        />
        </Form.Group>

        <Form.Group className="ms-5" controlId="formPasswordConfirmation">
          <Form.Label>Password Confirmation: </Form.Label>
          <Form.Control
            type = "password"
            placeholder= "Re-enter Password"
            value = {passwordConfirmation}
            onChange = {(e)=>setPasswordConfirmation(e.target.value)}
            autoComplete = "current-password"
          />
        </Form.Group>
        
        <Button type="submit" className='mt-2 ms-5'>Sign up</Button>
      </Form>
      <Errors errors={errors} />
      <h5 className="ms-5">Already have an account?<Link to="LoginForm">Sign in</Link></h5>
   </div>
  )
}

export default SignupForm