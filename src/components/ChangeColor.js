//Step 2: Dispatch action by making use of react hooks in functional component.
// useDispatch to dispatch the action created in slice.

//useSelector hook will provide us the redux-store object and can be de-structured to get the state values.
//useDispatch hook has to be invoked to set up the dispatcher.

import React from 'react'

const ChangeColor = () => {
  return (
    <div>
      <h1>Change color</h1>
    </div>
  )
}

export default ChangeColor