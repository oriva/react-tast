import React, {createContext, useState} from 'react';

export const TaskContext = createContext();

const TaskContextProvider = props => {
    const [tasks, setTasks] = useState([
        {id: 1, task: 'Описание задачи №1', status: 'Новый', priority: 'Низкий', deadline: '01.01.2019', actualDateEnd: '-'},
        {id: 2, task: 'Описание задачи №2', status: 'Новый', priority: 'Низкий', deadline: '01.01.2019', actualDateEnd: '-'},
        {id: 3, task: 'Описание задачи №3', status: 'Новый', priority: 'Низкий', deadline: '01.01.2019', actualDateEnd: '-'},
    ]);
    return (
        <TaskContext.Provider value={{tasks}}>
            {props.children}
        </TaskContext.Provider>
    )
};

export default TaskContextProvider