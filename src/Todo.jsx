import React, { useState } from 'react';

const TodoList = () => {
    const [inputTask, setInputTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const addTodo = () => {
        const newTask = {
            id: Math.random(),
            todo: inputTask
        };

        setTaskList([...taskList, newTask]);
        setInputTask('');
    };

   const captureInputChange = (event) => {
        setInputTask(event.target.value);
    };

   return (
        <>
        <div className="flex p-8 justify-center flex-col">
            <span className="font-bold text-2xl text-center">To Do List</span>
        </div>

        <div className="flex p-8 justify-center">
            <input className="rounded border-2 border-black text-black" type='text' onChange={captureInputChange} value={inputTask} placeholder="  Enter your task"/>&nbsp;&nbsp;
            <button onClick={addTodo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded">Submit</button>
        </div>

        <div className='flex ml-12 '>
            <ul className='text-black text-left'>
                { taskList.map((todo) => (
                    <li className="task" key={todo.id}>
                        <input type='checkbox'/>&nbsp;&nbsp;{todo.todo}
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};

export default TodoList;