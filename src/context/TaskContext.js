import React, {createContext, useState} from 'react'

export const TaskContext = createContext()

const TaskContextProvider = () => {
    const [tasks, setTasks] = useState([
        {id: 1, title: 'Описание задачи №1', status: 'Новый', priority: 'Низкий', deadline: '01.01.2019', actualDateEnd: '-'},
        {id: 2, title: 'Описание задачи №2', status: 'Новый', priority: 'Низкий', deadline: '01.01.2019', actualDateEnd: '-'},
        {id: 3, title: 'Описание задачи №3', status: 'Новый', priority: 'Низкий', deadline: '01.01.2019', actualDateEnd: '-'},
    ])
    return (
        <div></div>
    )
}

export default TaskContextProvider