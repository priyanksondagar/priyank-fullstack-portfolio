'use client'
import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return
      glowRef.current.style.left = `${e.clientX}px`
      glowRef.current.style.top = `${e.clientY}px`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={glowRef}
      className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
      style={{
        // background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        background: 'radial-gradient(circle, rgba(101, 102, 189, 0.08) 0%, transparent 70%)',

      }}
    />
  )
}