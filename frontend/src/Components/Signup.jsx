import { useState } from "react"

const Signup = ({toggle,setToggle}) => {
    //user data
    const [userData,setUserData] = useState({
      firstname:"",
      lastname:"",
      email:"",
      password:""
    })

    //to handle user data
    const handleChange = (e)=>{
      console.log(e.target.name , "   ", e.target.value)
      setUserData({...userData,[e.target.name]:e.target.value})
    }

    //Perform action on data
    const handelData = (e)=>{
      e.preventDefault();
       fetch('http://127.0.0.1:8000/in/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => console.error(error))
    }

  return (
  <>
    {toggle && (
    <div className="parent">
    <form onSubmit={handelData}>
        <div className="form_start">
        <div className="form_head">
         <a className="form_head_child" >Signup</a>
         <hr style={{color:"white",height:"20px"}}></hr>
         <a className="form_head_child" onClick={()=>setToggle(false)}>Signin</a>
        </div>
        </div>
        <label htmlFor="fname" className="form_lab">First Name</label>
        <input autoComplete="off" type="text" id="fname" name="firstname" className="form_inp"  onChange={handleChange}/>
        <label  htmlFor="lname" className="form_lab" >Last Name</label>
        <input autoComplete="off" type="text" id="lname" name="lastname"className="form_inp" onChange={handleChange}/>
        <label htmlFor="email" className="form_lab">Email</label>
        <input autoComplete="off" type="email" id="email" name="email"className="form_inp" onChange={handleChange}/>
        <label htmlFor="password" className="form_lab">Password</label>
        <input autoComplete="off" type="password" id="password" name="password"className="form_inp" onChange={handleChange}/>
        <button className="form_btn" type="submit">Submit</button>
    </form>
    </div>)}  
  </>
  )
}

export default Signup;