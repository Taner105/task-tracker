import React from 'react'
import Task from './Task'


const Tasks = ({tasks, deleteTask}) => {
    // console.log(tasks);
    return (
        <div>
            {
                tasks.map((task, index) => {
                    return(
                        <Task key={index}task={task} deleteTask={deleteTask}/>
                    )
                })
            }
        </div>
    )
}

export default Tasks
