'use client'
import Lottie from 'lottie-react'
import animationData from '@/public/animations/laptop.json'

export default function LaptopAnimation() {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className="w-full max-w-[480px]"
    />
  )
}