import React from 'react';
import {connect} from 'react-redux';
import img from '../spinner.gif';

const Loading = ({loading}) =>(
   
    loading ?
        <div>
        <h1>hello world</h1>
        <img src={img} alt='loading' />
        <h1>LOADING </h1>
        </div>:null

)
const mapStateToProps = (state)=>({
    loading  : state.loading
})
export default connect(mapStateToProps,null)(Loading)