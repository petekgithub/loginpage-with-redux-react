//Step 2: Dispatch action by making use of react hooks in functional component.
// useDispatch to dispatch the action created in slice.

//useSelector hook will provide us the redux-store object and can be de-structured to get the state values.
//useDispatch hook has to be invoked to set up the dispatcher.


import React from 'react';
import {useDispatch} from 'react-redux';
import {login, logout} from '../effects/user'

const Login = () => {


  const dispatch = useDispatch();

  return (
    <div>
        <button onClick={() => dispatch(login ({
          firstName: "Petek",
          lastName: "BigEyes",
          age:90,
          email: "granny@gmail.com"
        })) }>Login</button>
        <br />
        <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
  )
}

export default Login