import React, {Component} from "react";

class Header extends Component {
constructor(props){
  super(props);
   this.state = {
     title : 'React App',
     search : 'Enter your search'
   }
}

  render() {

    const styles = {
   
    }

return(
    <div>
        <header>
          <div className="logo" onClick={()=> { console.log("hai")}}>{this.state.title}</div> 
         <center>
           <input onChange ={this.inputChange.bind(this)}/>
           <p>{this.state.search}</p>
        </center>
        </header>
    </div>
);

}

inputChange(event){
    console.log(event.target.value);
    this.setState({'search' : event.target.value})
}
} 

export default Header;



/*
header:{
        backgroundColor:'tomato'
    },
    logo:{
        textAlign:'center',
        color:'#fff',
        fontSize:'30px'
     }

     */