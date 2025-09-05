"use client"

import React, { useEffect, useState } from 'react'

const MIN_VISIBLE_MS = 500 // minimum time the loader stays visible to avoid flashing

const Loading = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // show the loader for at least MIN_VISIBLE_MS on mount so users can see it
    setVisible(true)
    const t = window.setTimeout(() => setVisible(false), MIN_VISIBLE_MS)
    return () => window.clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 dark:bg-black/60">
      <div className="p-4 rounded-md bg-white dark:bg-[#0b0b0b] shadow">
        <div className="text-sm">loading...</div>
      </div>
    </div>
  )
}

export default Loading