import React from 'react';

const TodoListItem = (props) => {
		return (	
		<p>	  
		   <b>{props.listElement.task}</b>
		</p>
	    ); 
}

export default TodoListItem;