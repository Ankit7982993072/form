import axios from 'axios';
import e from 'cors';
import react,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import  './Dashboard.css';
// import DeleteIcon from '@shapla/react-delete-icon';
 
// import 
function Dash(){
    let history = useHistory ();
    const handleClick = () => {
       history.push ('./form');
    } 
    function deleteHandle(id)
    {
        document.getElementById(id).style.display="none";
        let y={FORM_ID:id}
        console.log(JSON.stringify(y)); 
        axios.post('http://survey3171.000webhostapp.com/api/deleteForm.php',JSON.stringify(y))
       .then((response) => {
         console.log(response);
       }, (error) => {
         console.log(error);
       });
    }
    useEffect(() => {
        
        axios.get('http://survey3171.000webhostapp.com/api/showAllForms.php')
       .then((response) => {
         console.log(response);
         console.log(response.data.FORM_DATA);
          setDataH([...response.data.FORM_DATA]);
       }, (error) => {
         console.log(error);
       });
        },[])

        const[dataH,setDataH]=useState([]);
        // console.log(setDataH(data));
        var k;
        
        console.log(dataH[0]);
        if(dataH.length!=0)
         k=dataH.map((ele,index)=><div>
             <div id={ele.FORM_ID} className="AK">
             <h4 >{ele.FORM_NAME} SURVEY</h4>
             {/* <i className="fas fa-trash-alt">Ankit</i> */}
             <a href="#"   onClick={()=>deleteHandle(ele.FORM_ID)}>Delete</a>
             {/* <i className="fa fa-search">Search</i> */}
             {/* <DeleteIcon size='small' >Click Me</DeleteIcon> */}
             </div>
             </div>)
        console.log(k);
     
    return(
         <div>
             
              <button className="create" onClick={handleClick}>+ Create New Form</button>    
              <div>
              <h3>Recent Surveys</h3>
              <p>{k}</p>
              </div>     
             
         </div>
        );
 
}
export default Dash;