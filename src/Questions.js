import React,{Component} from 'react';
import './Ques.css'
class Ques extends Component{
    constructor(props){
      super(props);
    //console.log(props);

    this.state={
      
      Question1:{}
    }
    }
    
    render(){
      
      console.log(this.state.NAME);
        return(

        <div >
          
        <div className="C">
        <h2>Question{this.props.ind!=1?this.props.ind+1:2}</h2>

         <input onChange={this.props.data1} type="text" placeholder="Questions"></input> <br></br>
         <div style={{display:"flex"}}>
         <input  className="F" type="radio" disabled></input >  
         <input onChange={this.props.op1} className="S"  type="text" placeholder="Options1"></input>
         </div>
         <div style={{display:"flex"}}>
         <input  className="F"  type="radio" disabled></input>  
         <input onChange={this.props.op2} className="S"  type="text" placeholder="Options2"></input>
         </div>
         <div style={{display:"flex"}}>
         <input className="F"  type="radio" disabled></input>  
         <input onChange={this.props.op3} className="S"  type="text" placeholder="Options3"></input>
         </div>
         <div style={{display:"flex"}}>
         <input className="F"  type="radio" disabled></input>  
         <input onChange={this.props.op4} className="S"  type="text" placeholder="Options4"></input>
         </div>
         </div>
          <div className="bu">
          {(9-this.props.ind==0)?<button onClick={this.props.sd}  className="K">MOVE TO SUBMIT</button>:<button onClick={this.props.data} id={this.props.ind} title="Add More Questions">ADD {9-this.props.ind} MORE QUESTIONS</button>} 
          </div>
        </div>  
        // <button>NOW MOVE TO SUBMIT</button>
        );
    }
}
export default Ques;