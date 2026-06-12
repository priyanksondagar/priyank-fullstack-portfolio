'use client'

export default function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top-left purple glow orb */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse-slow" />

      {/* Bottom-right purple glow orb */}
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-purple-600/15 blur-[100px] animate-pulse-slow" />

      {/* Center subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-indigo-900/10 blur-[80px]" />

    </div>
  )
}