import React, {useState} from 'react'
import Api from './Api';
import SignIn from './SignIn'


const LogIn = () => {
    const [data, setData]= useState({
        userName: '',
        password:'',
    })
    const {userName, password}= data;
    const [login, setLogin]= useState(true);
    const [flag, setFlag]= useState(false);
    const [signin, setSignin] = useState(false);
    

    const chnageHandler = e=>{
        setData({...data, [e.target.name]: e.target.value})
    }
    
    const submitHandler = e=>{
        e.preventDefault();
        let user= JSON.parse(localStorage.getItem('userName'));
        let pass= JSON.parse(localStorage.getItem('password'));
        
        if (user ===userName || pass===password){
            setLogin(false);
        } else if (user !== userName || pass !== password){
            console.log("error")
            setFlag(true);


        }
    }
    const myStyle= {
        margin:"0",
        padding: "0",
        backgroundColor: "lightgreen" ,
        display:'flex',
        flexDirection: 'coloumn',
        height:'100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }
      function handleClick(){
        setSignin(true);
      }

    return (
    <div style={myStyle}>
        {login ?(
        <center>
            <form onSubmit={submitHandler} style={{background:'yellow', padding: '20px', borderRadius:'7px'}}>
                <h2>Login Form</h2>
                <input type="text" name="userName" value={userName} onChange={chnageHandler} placeholder="Enter your  name" autoComplete="off" /><br/>
                <input type="password" name="password" value={password} onChange={chnageHandler} placeholder="Password" autoComplete='off' /><br/>
                <button type="submit" name="login">Log in</button><br/>
                { flag && (
                    <h3>Enter correct details</h3>
                )}
            </form>
            <p> <a href='#' onClick={handleClick} >Already have an account  Sign In </a></p>
        </center>
        ):(
            <Api/>
        )}
        {signin && (
            <SignIn/>
        )
        }
    </div>
  )
}

export default LogIn