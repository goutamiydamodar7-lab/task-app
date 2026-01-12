import React from 'react'

const TodoForm = () => {
  return (
   <form className="flex flex-col justify-center items-center gap-6">
    <input
    type="text"
    placeholder="Type Your task..."
    className="px-4 py-1.5 rounded-sm border border-gray-400 w-full max-w-5xl bg-gray-50"

    />
        
        <button type="submit" className="px-6 py-2 bg-green-400 rounded-sm">Add Task</button>
   </form>
  )
}

export default TodoForm