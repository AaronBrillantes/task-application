"use client";

import { useState, useEffect } from 'react'
import { ITask } from '@/src/types/ITask'
// import Navbar from '@/src/components/Navbar'
import TaskCard from '@/src/components/TaskCard'


export default function Tasks() {
  const [tasks, setTasks] = useState<ITask[]>([])           // typed state
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  useEffect(() => {
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((data: ITask[]) => setTasks(data))
  }, [])

  const handleAdd = async (): Promise<void> => {
    if (!title) return
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    })
    const newTask: ITask = await res.json()
    setTasks([...tasks, newTask])
    setTitle('')
    setDescription('')
  }

  const handleComplete = (id: number): void => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: true } : t)))
  }

  const handleDelete = async (id: number): Promise<void> => {
    await fetch(`/api/tasks?id=${id}`, { method: 'DELETE' })
    setTasks(tasks.filter((t) => t.id !== id))
  }

  return (
    <>
      
      <div style={{maxWidth: '600px', margin: '2rem auto', padding: '0 1rem' }}>
        <h2>My Tasks</h2>

        <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <input
            placeholder="Task title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            style={{ padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          <input
            placeholder="Description"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
            style={{ padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          <button
            onClick={handleAdd}
            style={{ padding: '0.5rem', background: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Add Task
          </button>
        </div>

        {tasks.map((task: ITask) => (
          <TaskCard
            key={task.id}
            task={task}
            onComplete={handleComplete}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  )
}