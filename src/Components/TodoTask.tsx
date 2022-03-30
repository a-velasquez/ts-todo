import React from 'react'
import {ITask} from '../Interfaces'

interface Props {
	task: ITask;
	markTaskComplete(taskToDelete: string): void;
}

const TodoTask = ({ task, markTaskComplete }: Props) => {
	return (
		<div className="task">
			<div className="content">
				<span>{task.taskName}</span>
			</div>
			<div className="deadline">
				<span>{task.deadline}</span>
			</div>
			<button onClick={() => {
				markTaskComplete(task.taskName)
			}}>X</button>
		</div>
	)
}

export default TodoTask
