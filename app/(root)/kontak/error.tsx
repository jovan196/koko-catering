"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

type Props = {
  error: Error
  reset: () => void
}

export default function KontakError({ error, reset }: Props) {
  useEffect(() => {
    // Keep a record on the server/dev console for debugging
    console.error('Kontak route error:', error)
  }, [error])

  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white dark:bg-[#0b0b0b] border rounded-md shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-2">Terjadi kesalahan</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Maaf, halaman Kontak gagal dimuat. Anda bisa mencoba memuat ulang atau kembali ke beranda.
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => reset()}
            className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Muat ulang
          </button>

          <Link href="/">
            <button className="px-3 py-2 border rounded">Beranda</button>
          </Link>

          <button
            onClick={() => setShowDetails(s => !s)}
            className="ml-auto text-sm underline"
            aria-expanded={showDetails}
          >
            {showDetails ? 'Sembunyikan detail' : 'Tampilkan detail'}
          </button>
        </div>

        {showDetails && (
          <pre className="mt-4 max-h-56 overflow-auto text-xs bg-gray-100 dark:bg-[#101010] p-3 rounded border">
            <code>{error.message}
{error.stack ?? ''}</code>
          </pre>
        )}
      </div>
    </div>
  )
}
