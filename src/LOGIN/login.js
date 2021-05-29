import react from 'react';
import {NavLink} from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Login(){ 
    let history = useHistory ();
    const handleClick = () => {
       history.push ('./create-new');
    } 
     return(
         <div>
             <input type="email" placeholder="Enter Email"></input><br></br>
             <input type="password" placeholder="Password"></input><br></br>
             <button onClick={handleClick}>LOG IN</button>             
             {/* <NavLink exact activeClassName=""
activeStyle={{
   backgroundColor:"Blue",
   border:"2px solid black",
   textDecoration:"none"
   
}} to='/create-new'  type="submit">submit</NavLink> */}
      </div>
        );
 
}
export default Login;