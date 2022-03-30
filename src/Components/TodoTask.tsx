import React from 'react'
import {ITask} from '../Interfaces'

interface Props {
  task: ITask;
}

const TodoTask = ({task}: Props) => {
  return (
		<div className="task">
			<div className="content">
				<span>{task.taskName}</span>
			</div>
			<div className='deadline'>
				<span>{task.deadline}</span>
			</div>
			<button className='button'>X</button>
		</div>
	)
}

export default TodoTask
