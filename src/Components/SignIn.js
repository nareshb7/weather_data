import React, {useState} from 'react'
import LogIn from './LogIn'
const SignIn = () => {
  const [data, setData]= useState ({
    userName:"",
    mblNumber:"",
    password:"",

  });
  const [flag, setFlag] = useState(false);
  const [login, setLogin]= useState(true);
  const [status, setStatus]= useState(false);
  const {userName, mblNumber, password}= data;
  const chnageHandler = e =>{
    setData({...data, [e.target.name]: e.target.value})
  }

  const submitHandler = e => {
    e.preventDefault();
    if (!userName || !mblNumber || !password){
      setFlag(true);
    }
    else{
      setFlag(false);
      setStatus(true);
      localStorage.setItem('username', JSON.stringify(data.userName));
      localStorage.setItem('mblNumber', JSON.stringify(data.mblNumber));
      localStorage.setItem('password', JSON.stringify(data.password));
      setLogin(!login);
      

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
    setLogin(!login);
  }

  return (
    <div style={myStyle}>
    {login ? (
   
    <center>
      
      <form onSubmit={submitHandler} style={{background:'yellow', padding: '20px', borderRadius:'7px'}}>
      <h2>Registration Form</h2>
        <input type="text" name="userName" value={userName} onChange={chnageHandler} placeholder="Enter your  name" autoComplete="off" /><br/>
        <input type="number" name="mblNumber" value={mblNumber} onChange={chnageHandler} placeholder="Enter mobile number" autoComplete="off"minLength={10} /><br/>
        <input type="password" name="password" value={password} onChange={chnageHandler} placeholder='password' autoComplete="off"/><br/>
        <button type="submit" name="register">Register</button><br/>
        { flag && (
      <h4 color="red" >Please fill details </h4> ) }

      </form>
      <p ><a  onClick={handleClick}>Already have an account Log in</a></p>
      {status && (
        <alert >Sucessfull</alert>
      )}
    
 </center>
  ):(
    <LogIn/>
    ) }
   </div>
  )
}

export default SignIn