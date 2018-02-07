import React from 'react';

 const TodoItem = (props) => {
    return(
      <li onClick={()=>props.clickHandler(props.index)} className={(props.data.cl == "dash") ? "dash": " "}>
        {props.data.cnt}
      </li>
    )
 }
export default TodoItem;
