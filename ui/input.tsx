'use client'

import React from "react"


type Variant = "primary" | "secondary"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    variant: Variant
}

export default function Input({variant, ...props}: InputProps){

    const variants: Record<Variant, string> = {
        "primary": "py-2 px-4 border-b border-gray-100 hover:border-(--red) focus-visible:border-b focus-visible:border-(--red)",
        "secondary": "py-2 px-4 border-b border-gray-100 hover:border-(--red) focus-visible:border-b focus-visible:border-(--red)"
    }
    
    return <input {...props} className={variants[variant]}/>
}