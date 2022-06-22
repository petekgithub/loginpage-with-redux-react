// the react hooks useSelector to read the state
// useSelector is a function that takes the current state as an argument and returns whatever data you want from it

//useSelector hook will provide us the redux-store object and can be de-structured to get the state values.


import React from 'react'
import {useSelector} from 'react-redux'


const Profile = () => {

  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);



  return (
    <div style={{color: themeColor}}>
        <h1>Profile page</h1>
        <p>First name: {user.firstName}</p>
        <p>Last name: {user.lastName}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile;