// pages/api/tasks.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { ITask } from '@/src/types/ITask'

let tasks: ITask[] = [
  { id: 1, title: 'Learn Next.js', description: 'Study routing and components', completed: false },
  { id: 2, title: 'Build a project', description: 'Apply what you learned', completed: false },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(tasks)
  }

  if (req.method === 'POST') {
    const { title, description } = req.body as Pick<ITask, 'title' | 'description'>
    const newTask: ITask = { id: Date.now(), title, description, completed: false }
    tasks.push(newTask)
    return res.status(201).json(newTask)
  }

  if (req.method === 'DELETE') {
    const id = Number(req.query.id)
    tasks = tasks.filter((t) => t.id !== id)
    return res.status(200).json({ message: 'Deleted' })
  }
}