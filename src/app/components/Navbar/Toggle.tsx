"use client";

import { cn, Switch } from '@nextui-org/react'
import React, { useState, useEffect } from 'react'
import { MoonIcon } from './MoonIcon'
import { useTheme } from 'next-themes'

const Toggle = () => {
    const [mounted, setMounted] = useState(false)
    const {setTheme, resolvedTheme} = useTheme()

    useEffect(() => setMounted(true), [])

    const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTheme(e.target.checked ? 'dark' : 'light');
    };

    if (!mounted) return (
        <Switch 
        classNames={{
            wrapper: cn(
            "outline outline-white outline-2 bg-transparent",
            "group-data-[selected=true]:bg-transparent"
            ),
            thumb: "bg-transparent"
        }}
        size='lg'
        />
    )

    if (resolvedTheme === 'dark') {
        return (
            <div>
            <Switch 
                defaultSelected
                classNames={{
                    wrapper: cn(
                    "outline outline-white outline-2 bg-transparent",
                    "group-data-[selected=true]:bg-transparent"
                    )
                }}
                size='lg'
                thumbIcon={({isSelected, className}) =>
                isSelected ? (<MoonIcon className={className}/>) : "."}
                onChange={handleThemeChange}
                />
            </div>
        )
    }

    if (resolvedTheme === 'light') {
        return (
            <div>
            <Switch 
                classNames={{
                    wrapper: cn(
                    "outline outline-white outline-2 bg-transparent",
                    "group-data-[selected=true]:bg-transparent"
                    )
                }}
                size='lg'
                thumbIcon={({isSelected, className}) =>
                isSelected ? (<MoonIcon className={className}/>) : "."}
                onChange={handleThemeChange}
                />
            </div>
        )
    }
}

export default Toggle
