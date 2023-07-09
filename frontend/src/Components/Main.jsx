import { useState } from 'react';
import Login from './Login'
import Signup from './Signup'
import Home from './Home';

const Main = ({setFlag}) => {
  const [toggle,setTogle] = useState(true);
  const [credCheck,setCredCheck] = useState(false);

  return (
    <>
    {!credCheck ?
    (<>
    <Login toggle={toggle} setToggle={setTogle} setCred = {setCredCheck} setFlag={setFlag}/>
    <Signup toggle={toggle} setToggle={setTogle}/>
    </>)
    :(<Home></Home>)
    }
    </>
  )
}

export default Main