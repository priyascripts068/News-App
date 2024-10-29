import React  from 'react'
import loading from '../loading.gif'

const Loading =()=> {
    return (
      <div style={{display : "flex" , alignItems : "center" , justifyContent : "center"}}>
        <img src={loading} alt="loading spinner" style={{width : "10rem" , height : "10rem"}}/>
      </div>
    )
}

export default Loading
