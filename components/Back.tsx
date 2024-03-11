"use client";
import { useRouter } from 'next/navigation'
 
export default function Back() {
  const router = useRouter()
 
  return (
    <button className="hover:text-slate-400" onClick={() => router.back()}>
      {'<'} back
    </button>
  )
}