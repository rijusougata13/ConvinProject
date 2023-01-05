import React, { Component, useEffect, useState } from 'react';
import  './App.scss';

const App =(props)=> {
    useEffect(()=>{
      props.setLoading()
      props.addUsers()
      
    },[])

    const selectUser=(index)=>{
      props.setLoading()
      props.fetchUser({id:index});
    }


    if(props.loading){
      return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
          <h1>loading...</h1>
        </div>
      )
    }

    return (
      <div className="App">
        <div className='Wrapper'>
         {props.currUser?<>  <div className='Card'>
              <img src={props?.currUser?.avatar}/>
              <p>Email: {props?.currUser?.email} </p>
              <p>First Name: {props?.currUser?.first_name} </p>
              <p>Last Name: {props?.currUser?.last_name}</p>
          </div>
        </>:<div><p>Click on the button to get the user details</p></div>}
          <div className='ButtonGroup'>
                {props.alluserss && props.alluserss.map((item,index)=>{
                  return(
                    <button onClick={e=>selectUser(index+1)}>{index+1}</button>
                  )
                }
                )}
          </div>
          </div>
      </div>
 
    )
}
export default App


