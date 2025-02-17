import { FaCheckSquare } from 'react-icons/fa';
import { BsCheck2Square } from 'react-icons/bs';
import { TbRefresh } from 'react-icons/tb';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([
    {
      title: 'Learn JavaScript',
      completed: true,
      id: 1,
    },
    {
      title: 'Learn React',
      completed: false,
      id: 2,
    },
  ]);

  return (
    <>
      <div className='max-w-lg px-5 m-auto mt-20'>
        <h1 className='flex justify-center text-3xl font-bold underline'>
          My Todo List
          <FaCheckSquare style={{color:'#42C239'}} />
        </h1>
      </div>

      <form>
        <div className='flex items-center w-full max-w-lg gap-2 p-5 m-auto'>
          <input 
            type='text'
            placeholder='start typing...'
            className='w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-200 rounded-xl placeholder:text-zinc-500 focus:border-zinc-700'
          />
          <button
            type='submit'
            className='px-5 py-2 text-white bg-blue-500 border-2 border-transparent rounded-lg hover:bg-blue-700'
          >
            Submit
          </button>
        </div>
      </form>

      <ul className='grid max-w-lg gap-2 px-5 m-auto'>
        {tasks.map(task => (
          <li 
            key={task.id}
            className={`p-5 rounded-xl bg-zinc-200 ${
              task.completed? 'bg-opacity-50 text-zinc-500':''
            }`}
          >
            <div className='flex flex-col gap-5'>
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                }} 
              >
                {task.title}
              </span>
              <div className='flex justify-between gap-5'>
                <button>
                  {task.completed ? (
                    <span className='flex items-center gap-1 hover:underline'>
                      <TbRefresh />
                        Set Active
                    </span>
                  ):(
                    <span className='flex items-center gap-1 hover:underline'>
                      <BsCheck2Square />
                        Set Completed
                    </span>
                  )}
                </button>
                <div className='flex items-center gap2'>
                  <button className='flex items-center gap-1 hover:underline'>
                    <FaRegEdit />
                      Edit
                  </button>
                  <button className='flex items-center gap-1 text-red-500 hover:underline'>
                    <RiDeleteBin7Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
  
