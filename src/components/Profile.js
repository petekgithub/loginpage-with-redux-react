//Step 2: Dispatch action by making use of react hooks in functional component.
// the react hooks useSelector to read the state
// useSelector is a function that takes the current state as an argument and returns whatever data you want from it

//useSelector hook will provide us the redux-store object and can be de-structured to get the state values.
//useDispatch hook has to be invoked to set up the dispatcher.


import React from 'react'
import {useSelector} from 'react-redux'


const Profile = () => {

  const user = useSelector((state) => state.user.value);



  return (
    <div>
        <h1>Profile page</h1>
        <p>First name: {user.firstName}</p>
        <p>Last name: {user.lastName}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile;