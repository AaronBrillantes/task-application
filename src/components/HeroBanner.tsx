"use client";
import IHeroBanner from "@/src/types/IHeroBanner"

export default function HeroBanner({ onGetStarted }: IHeroBanner) {
  return (
    <div style={{ textAlign: 'center', padding: '4rem', background: '#8297db' }}>
      <h1>Manage Your Tasks Simply</h1>
      <p>Stay organized and productive every day.</p>
      <button
        onClick={onGetStarted}
        style={{ padding: '0.75rem 2rem', background: '#333', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
      >
        Get Started
      </button>
    </div>
  )
}