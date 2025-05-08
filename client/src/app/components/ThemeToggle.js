'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const isDark = theme === 'dark'

    return (
        <div
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="w-16 h-8 flex items-center cursor-pointer px-1 rounded-full bg-gray-300 dark:bg-gray-700 transition-all relative"
        >
            <div
                className={`w-6 h-6 flex items-center justify-center rounded-full bg-white dark:bg-black text-yellow-500 dark:text-blue-300 shadow-md transform transition-transform ${isDark ? 'translate-x-8' : 'translate-x-0'
                    }`}
            >
                {isDark ? <FaMoon size={14} /> : <FaSun size={14} />}
            </div>
        </div>
    )
}
