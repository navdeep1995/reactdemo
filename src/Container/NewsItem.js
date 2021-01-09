import React from 'react';
import { connect } from 'react-redux'
const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
width: '50%',
margin: '0 auto',
color: 'olive'
}

const NewsItem = ({article}) => (
    
    article ?
        <div> <h1>News is here : --{article[0].name}  </h1></div>:
        null
);


const mapStateToProps = (state) => ({
    article: state.news
    })
    
export default connect(mapStateToProps,null)(NewsItem)