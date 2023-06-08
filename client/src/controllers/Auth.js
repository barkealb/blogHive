import React, { useState, useContext } from 'react'
import AuthForm from '../forms/AuthForm'
import { UserContext } from '../context/UserProvider'

function Auth(props) {

    // const { btnTxt, handleSubmit } = props


    const initState = {
        username: "",
        password: ""
    }

    const { signup, login } = useContext(UserContext)

    const [ userInput, setUserInput ] = useState(initState)

    const [ toggle, setToggle ] = useState(false)

    function handleToggle(){
        setToggle(prevTog => !prevTog)
    }

    function handleChange(e){
        const {name, value} = e.target
        setUserInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleSignUp(e){
        e.preventDefault()
        //signUp
        signup(userInput)
    }

    function handleLogin(e){
        e.preventDefault()
        //Login
       login(userInput)
    }

  return (
    <div className='authForm'>
        {!toggle ?
        <>
        <AuthForm
        userInput={userInput}
        handleChange={handleChange}
        handleSubmit={handleLogin}
        btnTxt="Login"
        />
        <p onClick={handleToggle}>Become A Member</p>
        </>
        :
        <>
        <AuthForm
         userInput={userInput}
         handleChange={handleChange}
         handleSubmit={handleSignUp}
         btnTxt="Sign Up"
        />
        <p onClick={handleToggle}>Already A Memeber</p>
        </>
        }  
    </div>
  )
}

export default Auth