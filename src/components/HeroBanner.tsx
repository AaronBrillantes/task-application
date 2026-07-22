"use client";
import IHeroBanner from "@/src/types/IHeroBanner"

export default function HeroBanner({ onGetStarted }: IHeroBanner) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
        textAlign: 'center',
        background: '#6497b1',
      }}
    ><div style={{border: "3px solid #ccc",padding:"3rem", borderRadius: "10px", background: "#b3cde0"}}>
      <h1 style={{fontWeight: "700", fontSize:"30px", margin: 0}}>Manage Your Tasks Simply</h1>
      <p style={{fontWeight: "700", fontSize:"20px", padding: '2px 0 1rem', maxWidth: '600px',}}>Stay organized and productive every day.</p>
      <button
        onClick={onGetStarted}
        style={{ fontWeight: "700", padding: '0.75rem 2rem', background: '#333', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
      >
        Get Started
      </button>
    </div>
      
    </div>
  )
}