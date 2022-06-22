// Dispatch action by making use of react hooks in functional component.
// useDispatch to dispatch the action created in slice.
//useDispatch hook has to be invoked to set up the dispatcher.

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeColor} from '../feature/theme'



const ChangeColor = () => {

const [color, setColor] = useState("");
const dispatch = useDispatch;

const changeColor = (e) => {
  dispatch(color);
}

  return (
    <div>
      <input
        type="text"
        onChange = {(e) => setColor(e.target.value)}
      />
      <button onClick={(e) => {dispatch(changeColor(color))}}>Change Color</button>
    </div>
  )
}

export default ChangeColor