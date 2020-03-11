import React, {useContext} from 'react'
import TaskContext from '../context/TaskContext'
import Task from './Task'

const TaskList = () => {
    const {tasks} = useContext(TaskContext);
    return (
        <tr>
            {tasks.map(task => {
                return <Task task={task}/>;
            })}
        </tr>
    )
};

export default TaskList