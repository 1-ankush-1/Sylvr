const Navbar = ({setFlag,flag})=>{

    const logout = (e)=>{
        e.preventDefault();
        fetch(`http://127.0.0.1:8000/in/user/logout`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
             if(data.message == "Logged out"){
              setFlag(false);
              localStorage.clear();
            }
          })
        .catch(error => console.error(error))
    }

return(
    <div style={{display:"flex" , flexDirection:"row",justifyContent:"space-between"}}>
    <h1>SYLVR</h1>
    {flag && <button style={{alignSelf:"center"}}onClick={logout}>Logout</button>}
    </div>
)
}

export default Navbar;