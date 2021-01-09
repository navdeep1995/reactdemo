import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../Actions/action';

const handleclick = (getNews)=> {
   console.log(getNews , " getnewa")
   var username = document.getElementById('uname').value
   console.log('username is  ',username)
   
   getNews(username)
}
let Button=({getNews})=>(
   <div>
      <input type="text" id = 'uname' name = 'uname'/>
      <button onClick={()=>{handleclick(getNews)}}>Press to see news</button>
   </div>
  
)
const mapDispatchToProps = {
     getNews: getNews,
};
Button = connect(null,mapDispatchToProps)(Button);
export default Button;