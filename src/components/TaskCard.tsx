
import { ITask } from '@/src/types/ITask'

interface TaskCardProps {
  task: ITask
  onComplete: (id: number) => void  // callback — receives id
  onDelete: (id: number) => void    // callback — receives id
}

export default function TaskCard({ task, onComplete, onDelete }: TaskCardProps) {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '0.75rem', background: task.completed ? '#e8ffe8' : '#fff' }}>
      <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </h3>
      <p>{task.description}</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
        <button onClick={() => onComplete(task.id)}>✅ Complete</button>
        <button onClick={() => onDelete(task.id)}>🗑️ Delete</button>
      </div>
    </div>
  )
}