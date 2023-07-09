import { useState } from "react"

const Login = ({setToggle,toggle,setCred,setFlag}) => {
    //user data
    const [userData,setUserData] = useState({
        email:"",
        password:""
      })
  
      //to handle user data
      const handleChange = (e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
      }
  
      //Perform action on data
      const handelData = (e)=>{
          e.preventDefault();
          const queryString = new URLSearchParams(userData).toString();
          fetch(`http://127.0.0.1:8000/in/auth/signin?${queryString}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(response => response.json())
          .then(data => {
            if(data.data){
                setCred(true)
                localStorage.setItem("data",JSON.stringify(data.data))
                alert(data.message);
                setFlag(true);
            }
           })
          .catch(error => console.error(error))
      }
    return (
        <>
          {!toggle && (
            <div className="parent">
              <form onSubmit={handelData}>
                <div className="form_start">
                  <div className="form_head">
                    <div className="form_head_child" >
                      Signin
                    </div>
                    <hr style={{ color: 'white', height: '20px' }}></hr>
                    <div className="form_head_child" onClick={()=>setToggle(true)}>
                      Signup
                    </div>
                  </div>
                </div>
                <label htmlFor="email" className="form_lab">
                  Email
                </label>
                <input type="email" id="email" name="email" className="form_inp" onChange={handleChange}/>
                <label htmlFor="password" className="form_lab">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form_inp"
                  onChange={handleChange}
                />
                <button className="form_btn" type="submit">Submit</button>
              </form>
            </div>
          )}
        </>
      );
}

export default Login