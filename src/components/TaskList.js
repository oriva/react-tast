import React, {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

const TaskList = () => {
    const { tasks } = useContext(TaskContext)
    return (
        <div>
            <tr>
                <td>
                    {tasks.map(task) => {
                        return
                    }}
                </td>
            </tr>
        </div>
    )
}

export default TaskList