import React, { Component } from 'react';
import TodoListItem from './todolistitem';

 const TodoList = (props) => {
 	
  return(
		<div>
			{props.todos.map((task,index)=>{return (
				<TodoListItem listElement={task} />
			)})}
			
		</div>
	);

}	

export default TodoList;
