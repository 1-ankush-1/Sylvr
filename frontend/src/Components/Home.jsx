import { useEffect, useState } from 'react'

const Home = () => {

        //user data
        const [userData,setUserData] = useState({
          firstname:"",
          lastname:"",
          email:"",

        })

        useEffect(() => {
            const storedData = JSON.parse(localStorage.getItem('data'));
            setUserData({ ...userData, ...storedData });
        }, []);
        
    
        //to handle user data
        const handleChange = (e)=>{
          setUserData({...userData,[e.target.name]:e.target.value})
        }
    
        //Perform action on data
        const handelData = (e)=>{
          e.preventDefault();
          const mail = JSON.parse(localStorage.getItem('data')).email;
          fetch(`http://127.0.0.1:8000/in/user/userupdate?${mail}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify(userData)
          })
          .then(response => response.json())
          .then(data => {
            alert(data.message);
            if(data.data){
                localStorage.setItem('data',data.data);
            }
          })
          .catch(error => console.error(error))
        }
    
    
      return (
      <>
        <div className="parent">
        <form onSubmit={handelData}>
            <div className="form_start">
             <h2>UPDATE</h2>
            </div>
            <label htmlFor="fname" className="form_lab">First Name</label>
            <input autoComplete="off" type="text" id="fname" name="firstname" className="form_inp"  onChange={handleChange} value={userData.firstname}/>
            <label  htmlFor="lname" className="form_lab" >Last Name</label>
            <input autoComplete="off" type="text" id="lname" name="lastname"className="form_inp" onChange={handleChange} value={userData.lastname}/>
            <label htmlFor="email" className="form_lab">Email</label>
            <input autoComplete="off" type="email" id="email" name="email"className="form_inp" onChange={handleChange} value={userData.email}/>
            <button className="form_btn" type="submit">Submit</button>
        </form>
        </div>
      </>
      )
}

export default Home