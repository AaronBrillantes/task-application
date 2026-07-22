
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff', display: 'flex', gap: '1rem' }}>
      <Link href="/" style={{ color: '#fff' }}>Home</Link>
      <Link href="/tasks" style={{ color: '#fff' }}>Tasks</Link>
      <Link href="/about" style={{ color: '#fff' }}>About</Link>
    </nav>
  )
}